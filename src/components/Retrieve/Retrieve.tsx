import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";

const Retrieve = () => {

    interface Student{
        name: string;
        rollno: number;
    }

    const [elements, setElements] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/getAll")
            .then((res) => res.json())
            .then((data) => {
                setElements(data);
                setLoading(false);
            });
    },[]);

    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.rollno}</Table.Td>
        </Table.Tr>
    ));

    return loading ? <Loader style={{marginTop:"80px", marginLeft:"80px"}} /> : (

        <Table style={{marginTop:"50px"}}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Roll Number</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}

export default Retrieve;