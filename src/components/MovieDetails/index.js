import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import axios from "axios";
import { img_500 } from "../../config/config";

const root =(theme)=>({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80%",
    height: "70%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 5,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

export default function TransitionsModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=26ba5e77849587dbd7df199727859189&language=en-US`
    );

    setContent(data);
  };

  console.log(content);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={root.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={root.paper}>
            <img
              src={`${img_500}/${content?.backdrop_path}`}
              style={{ width: "100%", objectFit: "contain" }}
              alt={id}
            />
            <h1>{content?.name || content?.title}</h1>
          </div>
        </Fade>
      </Modal>
    </>
  );
}