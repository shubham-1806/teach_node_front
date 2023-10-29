import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "./styles.module.css";
import toast from "react-hot-toast";
const Update = () => {
    const mantineForm = useForm({
        initialValues: {
            name: "",
            rollno: "",
        },
    });

    return (
        <Box className={styles.boxstyle} maw={340} mx="auto">
            <form
                onSubmit={mantineForm.onSubmit(
                    (values, _event) => {
                        fetch("http://localhost:3000/updateName", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        }).then((res) => {
                            if (res.status == 200) {
                                toast.success("Student name updated successfully");
                                mantineForm.reset();
                            } else {
                                res.json().then((data) => {
                                    toast.error(data.message);
                                });
                            }
                        });
                    },
                    (validationErrors, _values, _event) => {
                        console.log("hello");
                        console.log(validationErrors);
                    }
                )}
            >
                <TextInput
                    withAsterisk
                    label="Roll no."
                    placeholder="Your roll no."
                    {...mantineForm.getInputProps("rollno")}
                />

                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="Your name"
                    {...mantineForm.getInputProps("name")}
                />

                <Group justify="center" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
};

export default Update;
