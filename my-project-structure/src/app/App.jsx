import Button from "../components/UI/buttons/Button";
import TextInput from "../components/UI/inputs/TextInputs";
import Text from "../components/UI/texts/Texts";
import InputGroup from "../components/shared/forms/InputGroup";

const App = () => {
    return (
        <div>
            <InputGroup
                name="title"
                placeholder={"enter your title"}
                label={"Title"}
                error={"something went wrong"}
            />
        </div>
    );
};

export default App;
