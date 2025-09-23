

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
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/message/CGW6HBS664G4J1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded bg-green-500 hover:bg-green-600 text-white"
              title="Contact WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.991c-.003 5.455-4.438 9.89-9.898 9.89m8.413-18.304A11.815 11.815 0 0 0 12.05 0C5.495 0 .057 5.437.05 12.092c0 2.13.557 4.213 1.615 6.044L.057 24l6.043-1.588a11.888 11.888 0 0 0 5.944 1.515h.005c6.554 0 11.993-5.437 12-12.092a11.86 11.86 0 0 0-3.487-8.486"/>
              </svg>
            </a>
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
            {/* Bouton WhatsApp */}
            <a
              href="https://wa.me/message/CGW6HBS664G4J1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow transition"
              title="Contact WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.991c-.003 5.455-4.438 9.89-9.898 9.89m8.413-18.304A11.815 11.815 0 0 0 12.05 0C5.495 0 .057 5.437.05 12.092c0 2.13.557 4.213 1.615 6.044L.057 24l6.043-1.588a11.888 11.888 0 0 0 5.944 1.515h.005c6.554 0 11.993-5.437 12-12.092a11.86 11.86 0 0 0-3.487-8.486"/>
              </svg>
              WhatsApp
            </a>
           

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
              <Link to="/portfolio">
                <Button theme={"secondery"} className="w-full justify-start px-2 py-2 text-xs sm:text-sm rounded-none border-b border-blue-100" onClick={() => setOpen(false)}>Portfolio</Button>
              </Link>
              <Link to="/contact">
                <Button theme={"secondery"} className="w-full justify-start px-2 py-2 text-xs sm:text-sm rounded-none border-b border-blue-100" onClick={() => setOpen(false)}>Contactez Nous</Button>
              </Link>
              {user && (
                <>
                  {isAdmin && (
                    <Link to="/admin">
                      <Button theme={"secondery"} className="w-full justify-start px-2 py-2 text-xs sm:text-sm rounded-none border-b border-blue-100" onClick={() => setOpen(false)}>Admin</Button>
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
                <Link to="/login">
                  <Button theme={"secondery"} className="w-full justify-start px-2 py-2 text-xs sm:text-sm rounded-none" onClick={() => setOpen(false)}>Login</Button>
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

