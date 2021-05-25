import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="sticky-footer" className="footer py-2 bg-secondary text-white-50">
                    <div className="container text-center">
                        <small>Copyright &copy; William Papp</small>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;