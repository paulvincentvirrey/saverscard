import React, { Component } from "react";
import { CssBaseline, Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    marginTop: "auto",
    backgroundColor: "#414042"
  },
  footerCopyright: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#4e4e4e",
    color: "#ccc"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <div className={classes.footerCopyright}>
          <Container maxWidth="lg">
            <Typography variant="body2">
              © 2019 saverscard.com All rights Reserved
            </Typography>
          </Container>
        </div>
      </footer>
    </div>
  );

  // return (
  //   <footer className="page-footer">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s4 contact">
  //           <div className="title">Contact</div>
  //           <ul>
  //             <li>
  //               <i className="tiny material-icons">phone</i>
  //               <a href="tel:020 7112 8223">020 7112 8223</a>
  //             </li>
  //             <li>
  //               <i className="tiny material-icons">email</i>
  //               <a href="mailto:saverscardllc@gmail.com">
  //                 saverscardllc@gmail.com
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //         <div className="col s4">
  //           <div className="title">Useful Information</div>
  //           <ul>
  //             <li>
  //               <a href="">Terms & Conditions</a>
  //             </li>
  //             <li>
  //               <a href="">Privacy Policy</a>
  //             </li>
  //             <li>
  //               <a href="">Cookie Policy</a>
  //             </li>
  //           </ul>
  //         </div>
  //         <div className="col s4">
  //           <div className="title">Follow Us</div>
  //           <div className="social">
  //             <a
  //               href="https://www.facebook.com"
  //               target="_blank"
  //               rel="noopener nofollow"
  //             >
  //               <i className="fab fa-facebook-f" />
  //             </a>
  //             <a
  //               href="https://www.twitter.com"
  //               target="_blank"
  //               rel="noopener nofollow"
  //             >
  //               <i className="fab fa-twitter" />
  //             </a>
  //             <a
  //               href="https://www.instagram.com"
  //               target="_blank"
  //               rel="noopener nofollow"
  //             >
  //               <i className="fab fa-instagram" />
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="footer-copyright">
  //       <div className="container">
  //         © 2019 saverscard.com All rights Reserved
  //       </div>
  //     </div>
  //   </footer>

  // );
};

export default Footer;
