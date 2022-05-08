import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import styled from "styled-components"
import Radio from "../components/UI/Forms/Radio";
import TextField from "../components/UI/Forms/TextField";
import Button from "../components/UI/Forms/Button";
import "../assets/css/slick.min.css";
import axios from "axios";
import { withRouter } from 'react-router-dom'

const reasons = [
  'Désintérêt pour les sujets envoyés',
  'Manque de pertinence',
  'Fréquence d\'envoi élevée',
  'Autre'
]

const Main = (props) => {

  const [motif, setMotif] = useState("")

  const [motifTxt, setMotifTxt] = useState("")

  const [done, setDone] = useState(false)

  const findEmail = (search) => {
    const params = new URLSearchParams(search);
    const email = params.get('email');
    return email
  }

  const findHash = (search) => {
    const params = new URLSearchParams(search);
    const eid = params.get('eid');
    return eid
  }

  const unsucsribe = (email, hash) => {
    let motifValue = motif === 'Autre' ? motifTxt : motif
    var data = {
      email: email,
      motif: motifValue,
      hash: hash
    };
    var config = {
      method: 'post',
      url: process.env.REACT_APP_ENDPOINT + '/client/unsubscribe',
      data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDone(true)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h1 style={{ fontSize: "2.2em", textAlign: "center", paddingTop: "30px" }}>
        Désabonnement du service de reception des notifications
      </h1>
      {!done ? <Card>
        <Content>
          <h2>En poursuivant votre navigation sur cette page, vous ne receverez plus de notificationa Marketing sur votre adresse mail</h2>
          <h3>Pière de nous indiquer les raisons de votre désabonnement</h3>
          <Radio value={motif} onChange={e => setMotif(e.target.value)} items={reasons} />
          {motif === "Autre" && <TextField value={motifTxt} onChange={e => setMotifTxt(e.target.value)} ></TextField>}
          <ButtonContainer>
            <Button onClick={() => unsucsribe(findEmail(props.location.search), findHash(props.location.search))} hideIcon>Valider</Button>
          </ButtonContainer>
        </Content>
      </Card>

        :
        <div>
          <h2 style={{ textAlign: "center" }}> Vous avez été retiré de la liste des destinataires avec succès.
            vous ne receverez plus de notifications Marketing sur votre adresse mail</h2>
        </div>
      }

    </div>
  );
};

export default withRouter(Main);

const Content = styled.div`
display: flex;
flex-direction: column;
h2{
  font-weight: 600;
  font-size: larger;
}

h3{
  font-weight: 400;
  font-size: larger;
}
`

const ButtonContainer = styled.div`
display: flex;
flex-direction: row-reverse;
width: 100%;
`
