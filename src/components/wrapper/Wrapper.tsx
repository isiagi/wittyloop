import "./wrapper.css";

type Props = {
  name: string;
  img?: string;
};

function Wrapper({ name, img }: Props) {
  return (
    <div
      style={{
        background: `linear-gradient(90deg, rgba(24,64,73,0.6068802521008403) 100%, rgba(10,231,42,0.15029761904761907) 100%, rgba(0,212,255,0.2007177871148459) 100%),url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="wrapper__container"
    >
      <div className="wrapper__wrapper">
        <h2 style={{ color: "white" }}>{name}</h2>
      </div>
    </div>
  );
}

export default Wrapper;
