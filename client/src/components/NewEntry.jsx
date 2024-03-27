import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/react-hooks";
import { SAVE_EXERCISE } from "../utils/mutations";
import Auth from "../utils/auth";


function NewEntry() {
    const [userFormData, setUserFormData] = useState({ type: "", name: "" , duration: ""});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [workout, { error }] = useMutation(SAVE_EXERCISE);

    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);
    // Need to check validity 
    const handleInputChange = (event) => {
        const { workout, value } = event.target;
        setUserFormData({ ...userFormData, [workout]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await workout({
                variables: { ...userFormData },
            });

            console.log(data);
            Auth.login(data.login.token); // not sure if needs to be updated 
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            type: "",
            name: "",
            duration: "",
        });
    };
    return (
        <div className="container mt-5">
            <h2>New Workout Entry</h2>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                >
                    Something went wrong with your Workout Entry!
                </Alert>
                <Form.Group controlId="type">
                    <Form.Label>Type of Workout</Form.Label>
                    <Form.Control
                        type="type"
                        placeholder="Workout Type"
                        name="type"
                        value={userFormData.type}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Workout type is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="Name"
                        placeholder="Name of Workout"
                        name="Name"
                        value={userFormData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Name of workout is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        type="duration"
                        placeholder="Duration of Workout"
                        name="duration"
                        value={userFormData.duration}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Duration of workout is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="distance">
                    <Form.Label>Distance</Form.Label>
                    <Form.Control
                        type="Distance"
                        placeholder="Distance of Workout"
                        name="distance"
                        value={userFormData.distance}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="weight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                        type="weight"
                        placeholder="Weight of equipment"
                        name="weight"
                        value={userFormData.weight}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="reps">
                    <Form.Label>Reps</Form.Label>
                    <Form.Control
                        type="reps"
                        placeholder="Reps of Workout"
                        name="reps"
                        value={userFormData.reps}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="sets">
                    <Form.Label>Sets</Form.Label>
                    <Form.Control
                        type="Name"
                        placeholder="Name of Workout"
                        name="Name"
                        value={userFormData.sets}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={!(userFormData.type && userFormData.name && userFormData.duration)}
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}
export default NewEntry;