import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "./styles.module.css";
import toast from "react-hot-toast";
const Delete = () => {
    const mantineForm = useForm({
        initialValues: {
            rollno: "",
        },
    });

    return (
        <Box className={styles.boxstyle} maw={340} mx="auto">
            <form
                onSubmit={mantineForm.onSubmit(
                    (values, _event) => {
                        fetch("http://localhost:3000/deleteStudent", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        }).then((res) => {
                            if (res.status == 200) {
                                toast.success("Student deleted successfully");
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

                <Group justify="center" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
};

export default Delete;
