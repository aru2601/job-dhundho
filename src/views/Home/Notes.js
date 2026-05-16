import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
    Container,
} from "reactstrap";

class Jobs extends React.Component {
    state = {
        iconTabs: 1,
        plainTabs: 1,
    };
    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index,
        });
    };
    render() {
        return (
            <>
                <Container>
                    <h1 className="display-4 fw-bold mb-4 text-center mt-4">
                    Swap your notes for a wealth of knowledge{" "}
                    </h1>
                    <div className="file-upload-wrapper">
   <input type="file" id="input-file-now-custom-2" className="file-upload"
  data-height="500" />
</div>
                </Container>
            </>
        );
    }
}

export default Jobs;
