import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import UserTable from "./datatables/UserInfo/appx";
import UserRequest from "./datatables/RequestNew/appx";
import ReportContent from "./datatables/reportedContent";
import DeleteRequest from "./datatables/deleteRequest";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper elevation={3} square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Requests" {...a11yProps(1)} />
          <Tab label="Reported" {...a11yProps(2)} />
          <Tab label="Delete Request" {...a11yProps(3)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <UserTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserRequest />{" "}
      </TabPanel>{" "}
      <TabPanel value={value} index={2}>
        <ReportContent />{" "}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DeleteRequest />{" "}
      </TabPanel>
    </div>
  );
}
