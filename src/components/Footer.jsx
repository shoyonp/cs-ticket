import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral text-neutral-content">
        <div className="footer sm:footer-horizontal py-10 w-11/12 mx-auto ">
          <nav>
            <h6 className="footer-title">CS — Ticket System</h6>
            <p className="w-60">
              CS Ticket System is a modern and intuitive task management platform designed to streamline workflow and improve productivity. It helps teams efficiently track, manage, and resolve tickets with a smooth and organized experience, ensuring better collaboration and faster task completion.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <a className="link link-hover">@CS — Ticket System</a>
            <a className="link link-hover">@CS — Ticket System</a>
            <a className="link link-hover">@CS — Ticket System</a>
            <a className="link link-hover">support@cst.com</a>
            
          </nav>
        </div>

        <div className="border-t border-gray-600 w-11/12 mx-auto"></div>
        <div className="text-center py-7 text-sm">
          <p>
            © {new Date().getFullYear()} CS Ticket System. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
