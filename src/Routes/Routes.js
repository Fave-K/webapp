import React, { Component, Suspense, createRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
import styled from "styled-components";
import { Ref, Segment, Sidebar, Grid, Sticky } from "semantic-ui-react";

import "./Routes.css";

const DispatchHome = React.lazy(() => import("src/Pages/Dispatch/Home"));
const SafetyHome = React.lazy(() => import("src/Pages/Safety/Home"));
import Header from "components/Header";
import AppSidebar from "components/Sidebar";

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
                              </Switch>
                            </CSSTransition>
                          </TransitionGroup>
                        </Suspense>
                      </Content>
                    </ContentContainer>
                  </Grid>
                </GridContainer>

                {/* <ContentContainer>
                <Sidebar
                  animation="scale down"
                  vertical
                  visible={visible}
                  width="very wide"
                ></Sidebar>

                <Content></Content>
              </ContentContainer> */}
              </Fill>
            </Ref>
          )}
        />
      </ScrollToTopContainer>
    </Router>
  );
};

export default PageRouter;
