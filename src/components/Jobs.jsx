import Job from "./Job";
const Jobs = () => {
  return (
    <div class="container">
      <div className="item1">
        <Job name={"Maitre poutreur"} place={"CDI - Marseille"} />
      </div>
      <div className="item2">
        <Job name={"Livreur"} place={"CDD - Paris"} />
      </div>
      <div className="item3">
        <Job name={"Developpeur"} place={"CDD - Paris"} />
      </div>
      <div className="item4">
        <Job name={"Administrateur systeme"} place={"CDI - Lyon"} />
      </div>
      <div className="item5">
        <Job name={"Comptable"} place={"CDI - Nice"} />
      </div>
      <div className="item1">
        <Job name={"Chauffeur Taxi"} place={"CDI - Marseille"} />
      </div>
      <div className="item2">
        <Job name={"Testeur de Kebab"} place={"CDI- Lille"} />
      </div>
      <div className="item3">
        <Job name={"Cambreur de bananes"} place={"CDD - Strasbourg"} />
      </div>
      <div className="item4">
        <Job name={"Bras droit du CEO"} place={"CDI - Aix-en-provence"} />
      </div>
    </div>
  );
};

export default Jobs;
