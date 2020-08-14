import React, { Component, Suspense } from "react";
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
import { Divider, Segment, Sidebar, Menu } from "semantic-ui-react";

import "./Routes.css";

const Home = React.lazy(() => import("src/Pages/Home"));
import Header from "components/Header";
import AppSidebar from "components/Sidebar";

const Fill = styled.div`
  min-height: 100%;
`;

const Content = styled(Sidebar.Pushable)`
  margin-top: 3.5em;
  min-height: 100vh;
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
  const [visible, setVisible] = React.useState(true);
  return (
    <Router>
      <ScrollToTopContainer>
        <Route
          render={({ location }) => (
            <Fill>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Header />

              <Content>
                <Sidebar
                  animation="push"
                  vertical
                  visible={visible}
                  width="very wide"
                >
                  <AppSidebar />
                </Sidebar>

                <Sidebar.Pusher>
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
                          <Route exact path="/home" component={Home} />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  </Suspense>
                </Sidebar.Pusher>
              </Content>
            </Fill>
          )}
        />
      </ScrollToTopContainer>
    </Router>
  );
};

export default PageRouter;
