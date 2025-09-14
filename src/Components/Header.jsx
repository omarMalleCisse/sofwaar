

import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { EclipsBluBlur } from "./Theme/header";
import { logo } from "../assets/";
import { Link } from "react-router-dom";
import { useAuth } from "../Hook/useAuth";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { isAdmin, logout, user } = useAuth();
  return (
    <div className="border-b border-blue-900">
      <Container className={"relative n-9"}>
        <div className="relative z-10 flex items-center justify-between py-4 lg:py-6 ">
          <a href="/">
          <img src={logo} width={150} height={40} className="flex-shrink-0 w-[150px] h-[40px] lg:w-[260px] lg:h-[56px] transition-all duration-300" />
          </a>
          {/* Menu burger visible sur mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Ouvrir le menu"
            >
              <span className="rounded-md border border-blue-500 inline-flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563eb" style={{opacity:0.6}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
            </button>
          </div>
          {/* Menu horizontal sur desktop */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-4 flex-nowrap overflow-x-auto w-full justify-end">
           

            {user && (
              <>
                {isAdmin && (
                  <Link to="/admin">
                    <Button theme={"primary"} className="min-w-[60px] px-2 text-xs sm:text-sm">Admin</Button>
                  </Link>
                )}
                <Button 
                  onClick={() => {
                    logout();
                  }}
                  theme="primary" 
                  className="min-w-[60px] px-2 text-xs sm:text-sm"
                >
                  Logout
                </Button>
              </>
            )}
            {!user && (
              <Link to="/login">
                <Button theme={"primary"} className="min-w-[60px] px-2 text-xs sm:text-sm">Login</Button>
              </Link>
            )}
          </div>
          {/* Menu déroulant mobile */}
          {open && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-blue-200 rounded shadow-lg flex flex-col z-50 animate-fade-in">
              <Link to="/portfolio" onClick={() => setOpen(false)}>
                <Button theme={"secondery"} className="w-full justify-start px-2 py-2 text-xs sm:text-sm rounded-none border-b border-blue-100">Portfolio</Button>
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button theme={"secondery"} className="w-full justify-start px-2 py-2 text-xs sm:text-sm rounded-none border-b border-blue-100">Contactez Nous</Button>
              </Link>
              {user && (
                <>
                  {isAdmin && (
                    <Link to="/admin" onClick={() => setOpen(false)}>
                      <Button theme={"secondery"} className="w-full justify-start px-2 py-2 text-xs sm:text-sm rounded-none border-b border-blue-100">Admin</Button>
                    </Link>
                  )}
                  <Button 
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    theme="secondery" 
                    className="w-full justify-start px-2 py-2 text-xs sm:text-sm rounded-none"
                  >
                    Logout
                  </Button>
                </>
              )}
              {!user && (
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button theme={"secondery"} className="w-full justify-start px-2 py-2 text-xs sm:text-sm rounded-none">Login</Button>
                </Link>
              )}
            </div>
          )}
        </div>
        <EclipsBluBlur />
      </Container>
    </div>
  );
};

