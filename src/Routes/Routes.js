import "./Routes.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Grid, Ref, Segment, Sticky } from "semantic-ui-react";
import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";
import React, { Component, Suspense, createRef } from "react";

import AppSidebar from "components/Sidebar";
import Header from "components/Header";
import styled from "styled-components";

const DispatchHome = React.lazy(() => import("src/Pages/Dispatch/Home"));
const SafetyHome = React.lazy(() => import("src/Pages/Safety/Home"));
const SafetyServices = React.lazy(() => import("src/Pages/Safety/Services"));
const ControlRoomHome = React.lazy(() => import("src/Pages/ControlRoom/Home"));
const InboxChat = React.lazy(() => import("src/Pages/Inbox/Chat"));

const Fill = styled.div`
  min-height: 100%;
`;

const GridContainer = styled.div`
  &&& {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const ContentContainer = styled(Grid.Row)`
  &&& {
    padding: 0px;
  }
`;
const Content = styled(Grid.Column)`
  &&&& {
    padding: 0px;
  }
`;

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const ScrollToTopContainer = withRouter(ScrollToTop);

const PageRouter = () => {
  let contextRef = createRef();
  const [visible, setVisible] = React.useState(true);
  return (
    <Router>
      <ScrollToTopContainer>
        <Route
          render={({ location }) => (
            <Ref innerRef={contextRef}>
              <Fill>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/dispatch" />}
                />
                <Header />

                <GridContainer>
                  <Grid>
                    <ContentContainer>
                      <Content width={4}>
                        <Sticky context={contextRef}>
                          <AppSidebar />
                        </Sticky>
                      </Content>
                      <Content width={12}>
                        <Suspense
                          fallback={
                            <Segment loading>
                              {/* <Image src={autohausPlaceHolder} /> */}
                            </Segment>
                          }
                        >
                          <TransitionGroup>
                            <CSSTransition
                              key={location.key}
                              classNames="fade2"
                              timeout={300}
                            >
                              <Switch location={location}>
                                <Route
                                  exact
                                  path="/dispatch"
                                  component={DispatchHome}
                                />
                                <Route
                                  exact
                                  path="/safety"
                                  component={SafetyHome}
                                />
                                <Route
                                  exact
                                  path="/safety/services"
                                  component={SafetyServices}
                                />
                                <Route
                                  exact
                                  path="/control-room"
                                  component={ControlRoomHome}
                                />
                                <Route
                                  exact
                                  path="/inbox"
                                  component={InboxChat}
                                />
                              </Switch>
                            </CSSTransition>
                          </TransitionGroup>
                        </Suspense>
                      </Content>
                    </ContentContainer>
                  </Grid>
                </GridContainer>
              </Fill>
            </Ref>
          )}
        />
      </ScrollToTopContainer>
    </Router>
  );
};

export default PageRouter;
