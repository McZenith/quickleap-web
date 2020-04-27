import { NavBar } from "../../containers";

const NavLayout = ({ children }) => {
  return (
    <>
      <main>
        <NavBar />
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default NavLayout;
