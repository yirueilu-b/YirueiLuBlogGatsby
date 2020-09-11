import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import LandingSection from '../components/LandingSection'
import Layout from "../components/Layout/Layout";
import ArticleList from "../components/ArticleList"

const useStyles = {
    root: {
        flexGrow: 1,
        maxWidth: '100vw',
        minHeight: '100vh',
        padding: 0,
        textAlign: 'center',
    },
};

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    // componentDidMount() {
    // }

    render() {
        // const {classes} = this.props;
        return (
            <Layout>
                <LandingSection/>
                <ArticleList/>
            </Layout>
        );
    }
}

export default withStyles(useStyles)(App)