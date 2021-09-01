import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ImageUploader from "react-images-upload";

import { connect } from "react-redux";
import {
  addOfferRequest,
  getOne,
  fetchOneOfferFromAPI,
  editOfferRequest,
} from "../../../redux/offersRedux.js";

import styles from "./OfferFormular.module.scss";

const Component = ({
  className,
  children,
  offer,
  fetchOfferToEdit,
  addNewOffer,
  editOffer,
  toBeEdit,
}) => {
  useEffect(() => {
    if (toBeEdit) {
      fetchOfferToEdit();
    }
  }, []);
  const [title, setTitle] = useState(toBeEdit ? offer.title : "");
  const [description, setDescription] = useState(
    toBeEdit ? offer.description : ""
  );
  const [image, setImage] = useState(toBeEdit ? offer.image : "");
  const [price, setPrice] = useState(toBeEdit ? offer.price : "");
  const [region, setRegion] = useState(toBeEdit ? offer.region : "");
  const [regionId, setRegionId] = useState(toBeEdit ? offer.regionId : "");

  const handleImage = (files) => {
    setImage(files);
  };

  const handlePrice = (event) => {
    setPrice(parseInt(event.target.value));
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleRegion = (event) => {
    setRegion(event.target.value);
    if (event.target.value === "Chiapas") {
      setRegionId("chiapas");
    } else if (event.target.value === "Ciudad de Mexico") {
      setRegionId("cdmx");
    } else if (event.target.value === "Jalisco") {
      setRegionId("jalisco");
    } else if (event.target.value === "Huasteca Potosina") {
      setRegionId("huasteca");
    } else if (event.target.value === "Oaxaca") {
      setRegionId("oaxaca");
    } else if (event.target.value === "Riviera Maya") {
      setRegionId("rivieramaya");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    let error = null;

    if (title.length < 10) {
      alert("The title is too short");
      error = "text too short";
    } else if (description.length < 20) {
      alert("The content is too short");
      error = "description too short";
    } else if (!region) {
      alert("You have to choose status");
      error = "no region chosen";
    }

    if (!error) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("region", region);
      formData.append("regionId", regionId);

      if (image.length) {
        image.forEach((img) => formData.append("image", img));
      }
      if (toBeEdit) {
        editOffer(formData);
        alert("The offer has been updated");
        window.location = "/";
      } else {
        addNewOffer(formData);
        alert("New offer has been add");
        window.location = "/";
      }
    } else {
      alert("Please correct errors before submitting the form!");
    }
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Grid container align="center" justify="center">
        <Grid item align="center" xs={12} sm={9}>
          <Paper className={styles.form}>
            <form onSubmit={submitForm}>
              {toBeEdit ? (
                <Typography variant="h6" className={styles.title}>
                  Edit the offer
                </Typography>
              ) : (
                <Typography variant="h6" className={styles.title}>
                  Add a new offer
                </Typography>
              )}

              <Grid item align="center" xs={12} sm={9}>
                <TextField
                  required
                  name="title"
                  label="Title"
                  variant="filled"
                  onChange={handleTitle}
                  helperText="min. 10 characters"
                  fullWidth
                  value={title}
                />
              </Grid>
              <Grid item align="center" xs={12} sm={9}>
                <TextField
                  required
                  name="description"
                  label="Give the full description!"
                  variant="filled"
                  multiline
                  rows={4}
                  onChange={handleDescription}
                  helperText="min. 200 characters"
                  fullWidth
                  value={description}
                />
              </Grid>

              <Grid item align="center" xs={12} sm={9}>
                <TextField
                  required
                  name="price"
                  label="Price per person per day"
                  variant="filled"
                  onChange={handlePrice}
                  helperText="Price in EUR"
                  fullWidth
                  value={price}
                />
              </Grid>

              <Grid item align="center" xs={12} sm={9}>
                <FormControl fullWidth>
                  <InputLabel id="region">Region</InputLabel>
                  <Select
                    labelId="region"
                    id="region"
                    onChange={handleRegion}
                    fullWidth
                    variant="filled"
                    name="region"
                    value={region}
                    required
                  >
                    <MenuItem value="Chiapas">Chiapas</MenuItem>
                    <MenuItem value="Ciudad de Mexico">
                      Ciudad de Mexico
                    </MenuItem>
                    <MenuItem value="Huasteca Potosina">
                      Huasteca Potosina
                    </MenuItem>
                    <MenuItem value="Jalisco">Jalisco</MenuItem>
                    <MenuItem value="Oaxaca">Oaxaca</MenuItem>
                    <MenuItem value="Riviera Maya">Riviera Maya</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={9} className={styles.paperCard__item}>
                <Typography align="center">Add image</Typography>
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image"
                  imgExtension={[".jpg", ".gif", ".png", ".jpeg", ".jfif"]}
                  maxFileSize={5242880}
                  withPreview={true}
                  onChange={handleImage}
                  //singleImage={true}
                  className={styles.file}
                  name="image"
                />
              </Grid>
              <Grid item xs={12} sm={9} align="center">
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  className={styles.button}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
const mapStateToProps = (state) => ({
  offer: getOne(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOfferToEdit: () =>
    dispatch(fetchOneOfferFromAPI(props.match.params.offerId)),
  addNewOffer: (offer) => dispatch(addOfferRequest(offer)),
  editOffer: (value) =>
    dispatch(editOfferRequest(value, props.match.params.offerId)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as OfferFormular, Component as OfferFormularComponent };
