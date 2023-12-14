import React  from "react";

export const Footer: React.FC = (() => {
    return (
        <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <script>document.write(new Date().getFullYear())</script> © Velzon.
                </div>
                <div className="col-sm-6">
                    <div className="text-sm-end d-none d-sm-block">
                        Design & Develop by Themesbrand
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
})