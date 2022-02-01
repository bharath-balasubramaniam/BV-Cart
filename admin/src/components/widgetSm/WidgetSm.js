import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBESEBAPEA8QDw0QFRAPDw8OEA8RFREXFxUTExMYHSggGBolHRcTITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAgMH/8QANBABAQABAgMGBAUDBAMAAAAAAAECAxEEIUEFMVFhcYESMpHBIqGx0eFCUvByssLxI2KS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjV1ccfmu3632ccVrfBjv17p6snLK272729QXtTtD+3H3y/aK+XGal67ekjwAd3Wzv9WX/wBVz8d8b9agB3NbOf1ZfWvXDjdSdZfWK4DQ0+0JfmlnnOcW8M5lN5ZZ5MROGdxu8tl8gbgpcNx0vLPlfHpfXwXQAAAAAAAAAAAAAAAAAAUu05+HH1v6M9qdoT8HvGWAAAAAAAAAtcJxfw8sueP+3+FUBuyjO4DiNr8N7r3eV8GiAAAAAAAAAAAAAAADjV1JjN7/AN3wB4dpX8HrlGY71ta53e+06SOAAAAAAAAAAAGxwur8eMvXuvqx1zszPnZ4zf3gNEAAAAAAAAAAAAABkcXr/Hl/6zu/de7Q1NsNuuXL26/55ssAAAAAAAAAAAAB78Df/Jj7/pXg70Mtssb4WfQG0AAAAAAAAAAAAADP7UvPH0qkvdqT5b6z9FEAAAAAAACQAAAAAAGj2fr/ABT4b3ycvOLjI4PLbPH12+vJrgAAAAAAAAAAAArcfhvhfLn+7LbtjBAREgBuU2AP4NgAxvd6ABPsQNgEosJASAD14Sb54+u/05thm9m4b5W+E/O/5WkAAAAAAAAAAAAAwW8wYCQAAAAAAAAAAAAe3CafxZydJzvsDQ4TS+DGeN517gAAAAAAAAAAAACMu6+lYmE5Xyx+8n3bljG0ZvM/9H/LEHmJwx3snjZDPGy2XlYCAAAAAAAAAAFns7KTPn1lnvvFYBt55zGb3u5fndnTLxurqSY87jy57frerUAAAAAAAAAAAAAZ/D4bauWN7rMp7Xn+jQVeL0rvM8fmx6eMBSywunnN+ll9Zu0NfQx1Jv125ZQwyw1cfHy641xhoZ4fJlLj/bl9rAUNbRywvOe/SvNtbfFNspPTfeM/jOF+DnPlt+lBVAAAABOONvKS2+XMECcsbO+Wes2QA9uEuMznxbbefdL0eKzwXDzPfffabd3UGnMpesS509OYzaTaOgAAAAAAAAAAAAAAeGpw2Nu83xy8ceT1wlnfd/PbZ0AKXaepymPjd/af5+S1raswm9+nW+jI1tS5W29fy8gcAAAANTs/b4Pe7/Vlr3Zmp34+POff7Au54yzayWearqdn435bcfLvi4ApYdnzrlb6TZb08JjNpNo6AAAAAAAAAAAAAAABFsnfynjeSrrcdjPl/FfpAW1TX47GcsfxXx6T91HW4jLPvvLwnKPMHWpqXK7271yAAAAACccrLvOViAGjocdLyy5Xx6X9luVhu9PVyx+W2fp9AbQoaXaH9098f2W9LWxy+Wy+XX6A9AAAAAAAAAAAcaupMZbe6fmCdTOYze3aKOt2hf6Zt53v+irr61zu99p0jzB3qamWXfbfVygBIIBIgBIIBIAAgBIgBJKgBc0OOynLL8U8ev8AK/p6kym8u8Yj00tW4XefxfUG0PPQ1pnN57zwr0AAAAAAAVuP+Wf6vtQBRIkATAAABMdACEgCQASmACQAImAAkAe3D9fZ7AAAAAD/2Q=="
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
