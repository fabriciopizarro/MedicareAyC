const Header = ({ company }) => {
  const { adress, phone, name, slogan , boton} = company;

  return (
    <header className="header animate__animated animate__fadeIn">
      <div>
        <img className="logo" src="https://i.postimg.cc/PxCXPqkc/medicare.jpg"></img>
        {/* <button class="btn btn-warning rimary w-100">Pedir una cita</button> */}
      </div>
      <h5 className="header__name">{adress}</h5>
      <h4 className="header__name">{phone}</h4>
      <h1 className="header__name">{name}</h1>
      <h3>{slogan}</h3>
      
    </header>
  );
};

export default Header;