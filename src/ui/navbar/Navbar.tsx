import { useContext, useRef, useState } from "react";
import {
  NavbarStyle,
  ConnectAndRegisterButton,
  IconButtonStyle,
  AdminActionsContainer,
  AdminPanelActionButton,
} from "./NavbarStyle";
import { useHistory, useLocation } from "react-router-dom";
import { useCookies, withCookies } from "react-cookie";
import businessRegisterContext from "../../context/business-register/businessRegisterContext";
import {useScreenSize} from "../../hooks/index";
import DotsIcon from "../../assets/icons/mobile_dots.svg";
import NotificationsIcon from "../../assets/icons/notifications.svg";
import ShareIcon from "../../assets/icons/share.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import TempLogo from "../../assets/icons/default.svg";
import NavbarDropdown from "./navbar-dropdown/NavbarDropdown";
import adminPanelContext from "../../context/admin-panel/adminPanelContext";

export const Navbar = () => {
  const adminPanelState = useContext(adminPanelContext);
  const businessRegisterState = useContext(businessRegisterContext);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const [cookies, remove] = useCookies();
  const useProfileRef = useRef(null);
  const isSmallerThan1175px = useScreenSize(0, 1175);

  const handleButtonClick = () => {
    if (!cookies.token) {
      history.push("/login");
    } else {
      remove("token", "");
      remove("token-expired-date", "");
      history.push("/");

      businessRegisterState?.setServicesData({});
      businessRegisterState?.setWorkTimesData({});
      businessRegisterState?.setBusinessData({});
    }
  };

  return (
    <NavbarStyle isAdminPanel={location.pathname === "/admin-panel"}>
      <div onClick={() => history.push("/")} style={{ maxHeight: "100%" }}>
        <img
          src={TempLogo}
          alt="temporary-logo"
          style={{ width: "15rem", maxHeight: "100%", cursor: "pointer" }}
        />
      </div>

      <div>
        <>
          {location.pathname === "/business-register" && (
            <ConnectAndRegisterButton
              variant="outlined"
              onClick={handleButtonClick}
            >
              התנתקות
            </ConnectAndRegisterButton>
          )}

          {location.pathname === "/" && (
            <ConnectAndRegisterButton
              variant="outlined"
              onClick={() => history.push("/business-register")}
            >
              כניסה
            </ConnectAndRegisterButton>
          )}
        </>
      </div>

      {location.pathname === "/admin-panel" && (
        <>
          {!isSmallerThan1175px ? (
            <>
              <AdminActionsContainer>
                <AdminPanelActionButton
                  variant="text"
                  activeNavItem={adminPanelState?.activeNavItem === "יומן תורים"}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    adminPanelState?.setActiveNavItem("יומן תורים")
                  }}
                >
                  יומן תורים
                </AdminPanelActionButton>
                <AdminPanelActionButton
                  variant="text"
                  activeNavItem={adminPanelState?.activeNavItem === "קביעת תור"}
                  onClick={() => adminPanelState?.setActiveNavItem("קביעת תור")}
                >
                  קביעת תור
                </AdminPanelActionButton>
                <AdminPanelActionButton
                  variant="text"
                  activeNavItem={adminPanelState?.activeNavItem === "חסימת תור"}
                  onClick={() => adminPanelState?.setActiveNavItem("חסימת תור")}
                >
                  חסימת תור
                </AdminPanelActionButton>
              </AdminActionsContainer>

              <div style={{ maxWidth: "27rem" }}>
                <IconButtonStyle style={{ margin: "0 1rem" }}>
                  <img src={ShareIcon} alt="שיתוף לינק לקביעת תורים" />
                </IconButtonStyle>
                <IconButtonStyle style={{ margin: "0 1rem" }}>
                  <img src={NotificationsIcon} alt="צפיה בעדכונים אחרונים" />
                </IconButtonStyle>

                <IconButtonStyle
                  style={{ margin: "0 1rem" }}
                  onClick={() => setProfileDropdownOpen(true)}
                  ref={useProfileRef}
                >
                  <img
                    src={ProfileIcon}
                    alt="פתיחת פעולות פרופיל"
                    style={{ width: "4rem", height: "4rem" }}
                  />
                </IconButtonStyle>
              </div>
            </>
          ) : (
            <IconButtonStyle
              onClick={() => setProfileDropdownOpen(true)}
              ref={useProfileRef}
            >
              <img src={DotsIcon} alt="" />
            </IconButtonStyle>
          )}

          <NavbarDropdown
            open={profileDropdownOpen}
            anchorEl={useProfileRef.current}
            onClose={setProfileDropdownOpen}
          />
        </>
      )}
    </NavbarStyle>
  );
};

export default withCookies(Navbar);
