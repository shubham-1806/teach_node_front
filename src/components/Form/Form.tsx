import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "./styles.module.css";
import toast from "react-hot-toast";
function Form() {
    const mantineForm = useForm({
        initialValues: {
            name: "",
            rollno: "",
        },

        validate: {
            rollno: (value) => {
                if (value.length != 9) {
                    return "Roll no. is not valid";
                }
                return null;
            },
        },
    });

    return (
        <Box className={styles.boxstyle} maw={340} mx="auto">
            <form
                onSubmit={mantineForm.onSubmit(
                    (values, _event) => {
                        fetch("http://localhost:3000/addStudent", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        })
                        .then((res) => {
                            if (res.status == 200) {
                                toast.success("Student added successfully");
                                mantineForm.reset();
                            } else {
                                toast.error("Error adding student");
                            }
                        })
                    },
                    (validationErrors, _values, _event) => {
                        console.log("hello");
                        console.log(validationErrors);
                    }
                )}
            >
                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="Your name"
                    {...mantineForm.getInputProps("name")}
                />

                <TextInput
                    withAsterisk
                    label="Roll no."
                    placeholder="Your roll no."
                    {...mantineForm.getInputProps("rollno")}
                />

                <Group justify="center" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
}

export default Form;
