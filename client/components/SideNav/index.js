import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import NavList from "./NavList";
import Footer from "./Footer";
import AddNewListItem from "./AddNewListItem";

class SideNav extends Component {
    render() {
        const {
            user,
            activeBoard,
            boards
        } = this.props;
        const openWorkspace = this.props.match.path === "/workspace";
        const openTeams = this.props.match.path === "/teams";
        return (
            <React.Fragment>
                <div className="sidenav--primary">
                    <div className="sidenav-head">
                        <img
                            src="/assets/logo-horizontal.png"
                            className="header--logo"
                            style={{
                                margin: "auto",
                                maxWidth: "50%"
                            }}/>
                    </div>
                    <div className="sidenav-body">
                        <NavList
                            open={openTeams}
                            accordian={true}
                            title={"Teams"}
                            urlPrefix={"/teams"}
                            list={user.meta && user.meta.team_list}
                            activeItem={activeBoard}
                            addListItem={() => (
                                <AddNewListItem urlPrefix={"/teams"} text="Create New Team" />
                            )}
                        />
                        <NavList
                            accordian={true}
                            open={openWorkspace}
                            title={"Workspaces"}
                            urlPrefix={"/workspace"}
                            list={boards}
                            activeItem={activeBoard}
                            addListItem={() => (
                                <AddNewListItem urlPrefix={"/workspace"} text="Create New Workspace"/>
                            )}
                        />
                    </div>
                    <div className="sidenav-footer">
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ user, boards }) => ({
    activeBoard: boards.activeBoard,
    user: user.user,
    boards: boards.boards
});
export default withRouter(connect(mapStateToProps, {
})(SideNav));
