import Checkbox from "@material-ui/core/Checkbox";
export default function OfsCheckbox() {
    return (
      <div>
        <Checkbox defaultChecked color="primary" />
        <Checkbox color="primary" defaultChecked />
      </div>
    );
  }