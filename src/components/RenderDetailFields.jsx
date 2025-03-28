 // Function to render details dynamically
 const RenderDetailFields = ({details}) => {
    if (!details) return null;

    const keys = Object.keys(details);
    const excludedKeys = [
      "created", "edited", "url", "films", "characters", "planets",
      "starships", "vehicles", "species", "people", "residents", "pilots"
    ];

    const displayKeys = keys.filter(
      (key) => !excludedKeys.includes(key) && details[key] !== null && details[key] !== ""
    );

    const keyNameMap = {
      title: "Title", name: "Name", episode_id: "Episode ID", opening_crawl: "Opening Crawl",
      director: "Director", producer: "Producer", release_date: "Release Date", model: "Model",
      manufacturer: "Manufacturer", cost_in_credits: "Cost (Credits)", length: "Length",
      max_atmosphering_speed: "Max Atmospheric Speed", crew: "Crew", passengers: "Passengers",
      cargo_capacity: "Cargo Capacity", consumables: "Consumables", hyperdrive_rating: "Hyperdrive Rating",
      MGLT: "MGLT", starship_class: "Starship Class", classification: "Classification",
      designation: "Designation", average_height: "Average Height", skin_colors: "Skin Colors",
      hair_colors: "Hair Colors", eye_colors: "Eye Colors", average_lifespan: "Average Lifespan",
      language: "Language", rotation_period: "Rotation Period", orbital_period: "Orbital Period",
      diameter: "Diameter", climate: "Climate", gravity: "Gravity", terrain: "Terrain",
      surface_water: "Surface Water", population: "Population",
    };

    return displayKeys.map((key, index) => {
      const value = details[key];

      return (
        <div key={index} className="flex flex-col gap-[10px]">
          <label className="font-roboto font-normal text-sm">
            {keyNameMap[key] || key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </label>
          <div
            // value={value}
            // readOnly
            //  rows={value.length > 60 ? 21 : 1}
            className="w-full bg-[#FAFAFB] text-black px-4 text-xs leading-5 py-[10px] tracking-[0.1px] font-normal rounded-md border border-[#F1F1F5]"
          >{value}</div>
        </div>
      );
    });
  };

export default RenderDetailFields;