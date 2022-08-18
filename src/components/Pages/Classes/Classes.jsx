/* eslint-disable */
import React, { Component, Fragment, Suspense } from 'react'
import { connect } from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles'

import { ThemeProvider } from '@material-ui/styles'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import theme from '../../../theming/theme/foundation/theme'
import themeColors from '../../../theming/theme/foundation/color'
import {
  Divider,
  Grid,
  Button,
  Typography,
  Box,
  Fab,
  Paper,
  TabScrollButton,
} from '@material-ui/core'
import { flexbox } from '@material-ui/system'
import { debounce } from 'lodash'

import './Classes.global.scss'

import moment from 'moment'
import { name } from 'file-loader'
import { getSessions } from '../../../store/actions'
import { classActions, fetchNextPrefRecords } from '../../../store/actions'
import eventBus from '../../../EventBus'

import ClassListHeader from './ClassListHeader'
import ClassFilters from './ClassFilters'
import { ClassList } from './ClassList'
import { ClassDetail } from './ClassDetail'
import { TrainerDetail } from './TrainerDetail'
import { Modal } from '../../Molecules/Modal/Modal'

import { Loader, InlineLoader, InlineCircular } from '../../Molecules/Loader/Loader'
import { ScrollTop } from '../../Molecules/LoadMore/LoadMore'
import { dateFormat, timeFormat, slots, filterType, openModalName } from '../../../constants/util'
import { slotsAailable } from '../../../utils/slotConfig'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#f00',
  },
})

class Classes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // loading: true,
      isLoading: true,
      isLoadingInline: false,
      sessionList: [],
      totalRecords: 0,
      filteredDataList: [],

      corporateID: '',
      siteID: '',
      startDate: '', // TBD: replace this with calendar logic
      endDate: '', // TBD: replace this with calendar logic,
      weekDays: 7,

      isApplyEnabled: false,

      categorieseList: [],

      trainerList: [],
      filteredTrainerList: [],
      selectedTrainerList: [],
      inpTrainerSearch: '',

      activeSlotFilter: [],
      slotList: [],

      isSlotFilterApplied: false,
      isTrainerFilterApplied: false,
      isModalOpen: false,
      modalData: {
        modalTitle: '',
        modalName: '',
      },
      sessionId: '',
      sessionDate: '',
      trainerId: '',
      sessionImage: '',
      showRecords: 10,
      loadMoreRecords: 5,
    }
    this.pageTop = React.createRef()
    this.pageBott = React.createRef()
  }

  componentDidMount() {
    const cWeek = this.getWeeklyDate()
    const cdate = cWeek.startDate.format(dateFormat)

    const currWeek = {
      fromDate: cdate,
      toDate: moment(cdate).add(this.state.weekDays, 'days').format(dateFormat),
    }
    this.setState({ startDate: currWeek.fromDate, endDate: currWeek.toDate })
    let wSettings = this.props.appSetting.widgetSettingData
    wSettings.widgetVariation = this.props.widgetType
    this.props.fetchSessions(this.props.wSettings, currWeek.fromDate, currWeek.toDate)

    this.props.fetchTrainerList(wSettings)
    setTimeout(this.setClassListData, 3000)

    window.addEventListener('scroll', this.onScrollBottom)
  }

  setClassListData = async () => {
    if (this.props.sessionList) {
      const { data } = await this.props.sessionList
      const slotData = (data || []).map(rec => {
        let list = {}
        const slotT = moment(rec.startTime, timeFormat)
        if (
          slotT.isBetween(
            moment(slotsAailable[0].starttime, timeFormat),
            moment(slotsAailable[0].endtime, timeFormat)
          )
        ) {
          list = Object.assign(rec, { slotTime: slots.morning })
        } else if (
          slotT.isBetween(
            moment(slotsAailable[1].starttime, timeFormat),
            moment(slotsAailable[1].endtime, timeFormat)
          )
        ) {
          list = Object.assign(rec, { slotTime: slots.noon })
        } else if (
          slotT.isBetween(
            moment(slotsAailable[2].starttime, timeFormat),
            moment(slotsAailable[2].endtime, timeFormat)
          )
        ) {
          list = Object.assign(rec, { slotTime: slots.afternoon })
        } else {
          list = Object.assign(rec, { slotTime: slots.overnight })
        }
        return list
      })

      this.setState(
        {
          sessionList: slotData,
        },
        () => {
          this.getFilteredDataList(filterType.clear)
          this.getSlotList()
          this.getTrainerList()
        }
      )
    }
  }

  getSlotList = () => {
    const slotList = slotsAailable.map(t => Object.assign({}, t, { isChecked: false }))
    this.setState({ slotList: slotList })
  }

  getTrainerList = () => {
    const trainerList = (this.props.trainerList.data || []).map((item, ind) =>
      Object.assign(item, { isChecked: false })
    )
    this.setState({
      trainerList,
      filteredTrainerList: trainerList,
    })
  }

  getFilteredDataList = filter => {
    const isSlotFilterApplied = this.state.slotList.some(el => el.isChecked === true)
    const isTrainerFilterApplied = this.state.filteredTrainerList.some(el => el.isChecked === true)
    let data = []
    if (filter === filterType.clear || filter === filterType.reset) {
      data = this.state.sessionList
      this.setState({
        sessionList: data,
        activeSlotFilter: [],
      })
    } else {
      if (isTrainerFilterApplied && !isSlotFilterApplied) {
        let activeTrainers = this.state.filteredTrainerList.map(itemT => {
          if (itemT.isChecked) {
            return itemT.instructorName
          }
        })
        data = this.state.sessionList.filter(train => activeTrainers.includes(train.instructor))
      } else if (isSlotFilterApplied && !isTrainerFilterApplied) {
        let activeSlots = this.state.slotList.map(itemS => {
          if (itemS.isChecked) {
            return itemS.name
          }
        })
        data = this.state.sessionList.filter(slot => activeSlots.includes(slot.slotTime))
      } else if (isSlotFilterApplied && isTrainerFilterApplied) {
        let activeSlots = this.state.slotList.map(itemS => {
          if (itemS.isChecked) {
            return itemS.name
          }
        })

        let slotData = this.state.sessionList.filter(slot => activeSlots.includes(slot.slotTime))

        let activeTrainers = this.state.filteredTrainerList.map(itemT => {
          if (itemT.isChecked) {
            return itemT.name
          }
        })
        data = slotData.filter(train => activeTrainers.includes(train.instructor))
      }
    }
    this.setState(
      {
        totalRecords: data.length,
        filteredDataList: data,
      },
      () => {
        this.getCategoriesList()
      }
    )
  }

  getCategoriesList = (loadmore = false) => {
    const sdate = (this.state.filteredDataList || [])
      .filter((item, index) => {
        if (index < this.state.showRecords) {
          return item.sessionDate
        }
      })
      .reduce((acc, curr) => {
        if (!acc[curr.sessionDate]) acc[curr.sessionDate] = []
        acc[curr.sessionDate].push(curr)
        return acc
      }, [])
    const result = Object.keys(sdate).map((key, index) => {
      return { [key]: sdate[key] }
    })
    setTimeout(() => {
      this.setState(
        {
          categorieseList: result,
        },
        () => {
          if (loadmore) {
            this.setState({
              isLoadingInline: false,
            })
          } else {
            this.setState({
              isLoading: false,
            })
          }
        }
      )
    }, 1000)
  }

  getWeeklyDate = () => ({
    startDate: moment(),
    days: this.state.weekDays,
  })

  handleSlotFilters = event => {
    // checked: !this.state.checked
    let currObj = JSON.parse(event.target.value)
    currObj = Object.assign(currObj, { isChecked: event.target.checked })
    let filterBySlots = this.state.slotList
    const activeSlotsFilter = filterBySlots.map(el => {
      const ab = el.name === currObj.name ? Object.assign({}, el, currObj) : el
      return ab
    })

    this.setState({ slotList: activeSlotsFilter })
  }

  handleSearchTrainer = e => {
    let key = e.target.value
    const filteredTrainerList = this.state.trainerList.filter(item => {
      return item.instructorName.toLowerCase().search(key.toLowerCase()) !== -1
    })
    this.setState({ filteredTrainerList, inpTrainerSearch: e.target.value })
  }

  handleChangeTrainers = e => {
    let key = e.target.value
    let isChecked = e.target.checked
    let currObj = { name: key, isChecked: isChecked }

    let filtered = this.state.filteredTrainerList
    const selected = filtered.map(el => {
      const matched = el.instructorName === currObj.name ? Object.assign({}, el, currObj) : el
      return matched
    })
    this.setState({ filteredTrainerList: selected })
  }

  applyFilter = () => {
    this.getFilteredDataList(filterType.slot)
    this.handleCloseModal()
  }

  applyClearFilter = () => {
    this.getFilteredDataList(filterType.clear)
    this.getTrainerList()
    this.getSlotList()
    this.setState({ inpTrainerSearch: '' })
  }

  handleOpenModal = e => {
    e.preventDefault()
    const modalName = e.currentTarget.getAttribute('modal-name'),
      modalTitle = e.currentTarget.getAttribute('modal-title')

    if (modalName === openModalName.classdetail) {
      const sessionId = e.currentTarget.getAttribute('session-id'),
        sessionDate = e.currentTarget.getAttribute('session-date')

      this.setState(
        {
          sessionId,
          sessionDate,
        },
        () => {
          this.props.fetchSessionDetail(this.props.wSettings, sessionId, sessionDate)
        }
      )
    } else if (modalName === openModalName.trainerdetail) {
      const trainerId = e.currentTarget.getAttribute('trainer-id')
      this.setState(
        {
          trainerId,
        },
        () => {
          this.props.fetchInstructorProfile(this.props.wSettings, trainerId)
        }
      )
    }

    this.setState({
      isModalOpen: true,
      modalData: {
        ...this.state.modalData,
        modalName: modalName,
        modalTitle: modalTitle,
      },
    })
  }

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  isApplyEnabled = () =>
    this.state.slotList.some(el => el.isChecked === true) ||
    this.state.filteredTrainerList.some(el => el.isChecked === true)
      ? true
      : false

  // modal Components---------------
  // classDetailComp = () => <ClassDetail />

  // trainerDetailComp = () => <TrainerDetail />

  // classFilterComp = () => (
  //   <ClassFilters
  //     slotList={this.state.slotList}
  //     handleSlotFilters={this.handleSlotFilters}
  //     inpTrainerSearch={this.state.inpTrainerSearch}
  //     handleSearchTrainer={this.handleSearchTrainer}
  //     filteredTrainerList={this.state.filteredTrainerList}
  //     handleChangeTrainers={this.handleChangeTrainers}
  //   />
  // )

  childModalComponent = mdlname => {
    if (mdlname === openModalName.filter) {
      return {
        modalData: this.state.modalData,
        // comp: this.classFilterComp(),
        noheader: false,
        nofooter: false,
        dialogAction: [
          {
            label: 'Clear',
            action: this.applyClearFilter,
            variant: 'outlined',
            color: 'primary',
          },
          {
            label: 'Apply Filter',
            action: this.applyFilter,
            shouldDisabled: true,
            isApplyEnabled: this.isApplyEnabled,
            variant: 'contained',
            color: 'primary',
          },
        ],
      }
    } else if (mdlname === openModalName.classdetail) {
      return {
        modalData: this.state.modalData,
        // comp: this.classDetailComp(),
        sessionId: this.state.sessionId,
        sessionDate: this.state.sessionDate,
        noheader: true,
        nofooter: false,
        dialogAction: [
          {
            label: 'Book multiple',
            action: () => {},
            variant: 'outlined',
            color: 'primary',
          },
          {
            label: 'Book',
            action: () => {},
            variant: 'contained',
            color: 'primary',
          },
        ],
      }
    } else if (mdlname === openModalName.trainerdetail) {
      return {
        modalData: this.state.modalData,
        // comp: this.trainerDetailComp(),
        isApplyEnabled: this.isApplyEnabled,
        noheader: false,
        nofooter: true,
        dialogAction: [],
      }
    }
  }
  //---------------

  handleNextPrevRecords = reqdate => {
    this.props.fetchNextPrevRecords(reqdate)
  }

  loadMore = () => {
    this.setState({
      isLoadingInline: true,
    })
    if (this.state.showRecords <= this.state.totalRecords) {
      this.setState({ showRecords: this.state.showRecords + this.state.loadMoreRecords }, () => {
        this.getCategoriesList(true)
        this.scrollToBottom()
      })
    } else {
      setTimeout(() => {
        this.setState(
          {
            isLoadingInline: false,
          },
          () => {
            console.log('no more records found')
          }
        )
      }, 1000)
    }
  }

  onScrollBottom = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 5
    ) {
      this.loadMore()
    }
  }, 300)

  scrollToBottom = () => {
    setTimeout(() => {
      this.pageBott.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }, 1500)
  }
  scrollToTop = () => this.pageTop.current.scrollIntoView({ behavior: 'smooth' })

  render() {
    const modalname = this.state.modalData.modalName
    const childComp = this.childModalComponent(modalname)
    const { classes } = this.props

    return (
      <ThemeProvider theme={theme}>
        {this.state.isLoading ? (
          <Fragment>
            <Loader />
          </Fragment>
        ) : (
          <Grid ref={this.pageTop}>
            <ClassListHeader
              weeklyDate={this.getWeeklyDate()}
              records={this.state.totalRecords}
              wSettings={this.props.wSettings}
              handleOpenModal={this.handleOpenModal}
              totalRecords={this.state.totalRecords}
              nextPrevRecords={this.handleNextPrevRecords}
              weekDays={this.state.weekDays}
              loadMore={this.loadMore}
            />

            <ClassList
              handleOpenModal={this.handleOpenModal}
              categorieseList={this.state.categorieseList}
            />
            <ScrollTop loadMore={this.scrollToTop}>
              <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
            {this.state.isLoadingInline && <InlineLoader />}

            <Divider variant="middle" ref={this.pageBott} />

            <Box>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Typography className={classes.paper} color="secondary" justifycontent="center">
                    Total Record(s): {this.state.totalRecords}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.paper} color="secondary" justifycontent="center">
                    {this.state.totalRecords > this.state.showRecords ? (
                      <Fragment>Record(s) Loaded: {this.state.showRecords}</Fragment>
                    ) : (
                      <Fragment>{'No more record(s) found'}</Fragment>
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {/* <Button ariant="outlined" color="primary" href="#" onClick={this.loadMore}>
              Load more records
            </Button>
            <Divider variant="middle" /> */}

            {this.state.isModalOpen && (
              <Modal
                isModalOpen={this.state.isModalOpen}
                handleCloseModal={this.handleCloseModal}
                modalData={this.childModalComponent(modalname)}
                // children={childComp.comp}
              >
                {this.state.modalData.modalName === openModalName.filter && (
                  <ClassFilters
                    slotList={this.state.slotList}
                    handleSlotFilters={this.handleSlotFilters}
                    inpTrainerSearch={this.state.inpTrainerSearch}
                    handleSearchTrainer={this.handleSearchTrainer}
                    filteredTrainerList={this.state.filteredTrainerList}
                    handleChangeTrainers={this.handleChangeTrainers}
                  />
                )}
                {this.state.modalData.modalName === openModalName.classdetail && (
                  <ClassDetail handleOpenTrainerModal={this.handleOpenModal} />
                )}
                {this.state.modalData.modalName === openModalName.trainerdetail && (
                  <TrainerDetail />
                )}
              </Modal>
            )}
          </Grid>
        )}
      </ThemeProvider>
    )

    eventBus.on('userAuthenticated', data => {
      // console.log("event 'userAuthenticated' captured");
      this.props.loading = true
      this.props.dispatch(classActions.getSessions(this.props.appSetting.widgetSettingData))
    })
  }

  componentWillUnmount() {
    eventBus.remove('userAuthenticated')
    // console.log("event 'userAuthenticated' removed");
  }
}

const mapStateToProps = state => ({
  appSetting: state.appSetting,
  wSettings: state.appSetting.widgetSettingData,
  sessionList: state.classes.sessionList,
  trainerList: state.classes.trainerList,
  // loading: state.classes.loading,
})

const mapDispatchToProps = dispatch => ({
  fetchSessions: (wSettings, sDate, eDate) =>
    dispatch(classActions.getSessions(wSettings, sDate, eDate)),
  fetchTrainerList: appSettings => dispatch(classActions.getTrainerList(appSettings)),
  fetchNextPrevRecords: reqDates => dispatch(fetchNextPrefRecords(reqDates)),
  fetchSessionDetail: (appSettings, sID, sDate) => {
    return dispatch(classActions.getSessionsDetails(appSettings, sID, sDate))
  },
  fetchInstructorProfile: (appSettings, instructorID) =>
    dispatch(classActions.getInstructorProfile(appSettings, instructorID)),
})
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Classes))
