import React from "react";
import './header.scss'
import { NavLink } from "react-router-dom";
import { useAuthContext } from "@/context/UseAuthContextProvider";

const Header = () => {
  const { isAuth, logout } = useAuthContext();

  return (
    <nav className="header">
      <NavLink className={"header__logo"} to={"/"}>
        LOGO
      </NavLink>
      <ul className="header__nav-list">
        <li className="header__list-item">
          <NavLink
            className={(isActive) =>
              isActive
                ? "header__item-link header__item--is-active"
                : "header__item-link"
            }
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </li>

        {isAuth ? (
          <>
            <li className="header__list-item">
              <NavLink
                className={(isActive) =>
                  isActive
                    ? "header__item-link header__item--is-active"
                    : "header__item-link"
                }
                to={"/secret"}
              >
                Secret
              </NavLink>
            </li>

            <li className="header__list-item">
              <NavLink className={"header__item-link"} onClick={logout} to={'/login'}>
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="header__list-item">
              <NavLink
                className={(isActive) =>
                  isActive
                    ? "header__item-link header__item--is-active"
                    : "header__item-link"
                }
                to={"/login"}
              >
                Login
              </NavLink>
            </li>

            <li className="header__list-item">
              <NavLink
                className={(isActive) =>
                  isActive
                    ? "header__item-link header__item--is-active"
                    : "header__item-link"
                }
                to={"/singup"}
              >
                Singup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
