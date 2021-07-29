import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentUserFirstName,
} from "./redux/user/user.selectors";
import AllProjects from "./pages/all-projects/all-projects";
import Project from "./pages/project/project.page";
import Task from "./pages/task/task.page";
// import Step from './pages/step/step.page'
import PurchaseOrder from "./pages/task-purchase-orders/task-purchase-orders.page";
import IndividualPurchaseOrder from "./pages/individual-purchase-order/individual-purchase-order.page";
import projectPurchaseOrders from "./pages/project-purchase-orders/project-purchase-orders";
import ChangeOrder from "./pages/task-change-orders/task-change-orders.page";
import IndividualChangeOrder from "./pages/individual-change-order/individual-change-order.page";
import projectSchedule from "./pages/project-schedule/project-schedule";
import ManageTeam from "./components/manage-team/manage-team.component";
import ProjectChangeOrders from "./pages/project-change-orders/project-change-orders.page";
import projectPunchList from "./pages/project-punch-list/project-punch-list";
import createTask from "./pages/create-task/create-task";
import createPO from "./pages/create-PO/create-PO";
import CostBook from "./pages/cost-book/cost-book.page";
import costCode from "./pages/cost-code/cost-code.page";
import CostBookItem from "./pages/cost-book-item/cost-book-item.page";
import createCostBookCategoryPage from "./pages/create-cost-book-category/create-cost-book-category.page";
import createCostBookCostcodePage from "./pages/create-cost-book-costcode/create-cost-book-costcode.page";
import createCostCodeItem from "./pages/create-cost-code-item/create-cost-code-item";
import Organisation from "./pages/organisation/organisation.page";
import createOrganisationPage from "./pages/create-organisation/create-organisation.page";
import hamburgerPage from "./pages/hamburger/hamburger.page";
import CreateProject from "./pages/create-project/create-project.page";
import createProjectScratchPage from "./pages/create-project-scratch/create-project-scratch.page";
import CreateCO from "./pages/create-CO/create-CO";
import Invite from "./pages/invite/invite";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          exact
          render={() =>
            props.currentUser ? (
              <Redirect to="/organisations" />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
        <Route path="/all-projects/:orgId" exact component={AllProjects} />
        <Route path="/createProject/:orgId" exact component={CreateProject} />
        <Route
          path="/createProject/FromScratch/:orgId"
          exact
          component={createProjectScratchPage}
        />
        <Route path="/project/:projectId" exact component={Project} />
        <Route path="/project/:projectId/invite" exact component={Invite} />
        <Route path="/task/:taskId" exact component={Task} />
        {/* <Route path='/step/:stepId' exact component={Step} /> */}
        <Route path="/purchaseOrders/:taskId" exact component={PurchaseOrder} />
        <Route path="/changeOrders/:taskId" exact component={ChangeOrder} />
        <Route
          path="/changeOrder/:COid"
          exact
          component={IndividualChangeOrder}
        />
        <Route
          path="/purchaseOrder/:POid"
          exact
          component={IndividualPurchaseOrder}
        />
        <Route
          path="/projectPurchaseOrders/:projectId"
          exact
          component={projectPurchaseOrders}
        />
        <Route path="/schedule/:projectId" exact component={projectSchedule} />
        <Route path="/ManageTeam" exact component={ManageTeam} />
        <Route
          path="/projectChangeOrders/:projectId"
          exact
          component={ProjectChangeOrders}
        />
        <Route
          path="/punchList/:projectId"
          exact
          component={projectPunchList}
        />
        <Route path="/createTask/:projectId" exact component={createTask} />
        <Route path="/costbook" exact component={CostBook} />
        <Route
          path="/cost-code/:categoryId/:costCodeId"
          exact
          component={costCode}
        />
        <Route path="/createPO/:projectId" exact component={createPO} />
        <Route
          path="/cost-item/:categoryId/:costCodeId/:itemId"
          exact
          component={CostBookItem}
        />
        <Route
          path="/costbook/createcategory"
          exact
          component={createCostBookCategoryPage}
        />
        <Route
          path="/costbook/createcostcode"
          exact
          component={createCostBookCostcodePage}
        />
        <Route
          path="/costbook/:categoryId/:costCodeId/createItem"
          exact
          component={createCostCodeItem}
        />
        <Route path="/organisations" exact component={Organisation} />
        <Route
          path="/createOrganisation"
          exact
          component={createOrganisationPage}
        />
        <Route path="/createCO/:projectId" exact component={CreateCO} />

        <Route path="/nav" exact component={hamburgerPage} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUserFirstName,
});

export default connect(mapStateToProps, null)(App);
