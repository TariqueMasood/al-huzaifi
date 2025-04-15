import React from "react";
import { Table, Spinner, Alert } from "react-bootstrap";
import styled from "styled-components";
import { useUsers } from "../../hooks/use-users";
import { User } from "../../@types/registered-user";

const RegisteredUsers: React.FC = () => {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) return <Spinner animation="border" />;

  if (isError) return <Alert variant="danger">Error fetching users data</Alert>;

  return (
    <Wrapper>
      <h2>Registered Users</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: User) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default RegisteredUsers;

const Wrapper = styled.div``;
