import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/UI/buttons/Button";
const init = {
    title: "",
    bio: "",
    skills: "",
};
const App = () => {
    const [formState, setFormState] = useState({ ...init });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(formState);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <InputGroup
                        value={formState.title}
                        label={"Title:"}
                        name={"title"}
                        placeholder={"Software Engineer"}
                        onChange={handleChange}
                    />
                    <InputGroup
                        value={formState.bio}
                        label={"Bio:"}
                        name={"bio"}
                        placeholder={"I am a software engineer"}
                        onChange={handleChange}
                    />
                    <InputGroup
                        value={formState.skills}
                        label={"Skills:"}
                        name={"skills"}
                        placeholder={"Javascript, react"}
                        onChange={handleChange}
                    />
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default App;
