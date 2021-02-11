import React from 'react';

import { Stack } from '@chakra-ui/react';
import { isMinLength } from '@formiz/validations';

import { FieldGroupCheckbox, FieldInput, FieldSelect } from '@/components';

const AUTHORITIES = {
  ADMIN: 'ROLE_ADMIN',
  USER: 'ROLE_USER',
};

export const UserForm = () => {
  const authorities = Object.values(AUTHORITIES).map((value) => ({ value }));
  return (
    <Stack
      direction="column"
      bg="white"
      p="6"
      borderRadius="lg"
      spacing="6"
      shadow="md"
    >
      <FieldInput
        name="login"
        label="Login"
        required="This field is required"
      />
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldInput name="firstName" label="First Name" />
        <FieldInput name="lastName" label="Last Name" />
      </Stack>
      <FieldInput
        name="email"
        label="Email"
        required="This field is required"
      />
      <FieldSelect
        name="langKey"
        label="Language"
        options={[{ label: 'English', value: 'en' }]}
        defaultValue={'en'}
      />
      <FieldGroupCheckbox
        name="authorities"
        label="Authorities"
        options={authorities}
        isRequired
        validations={[
          {
            rule: isMinLength(1),
            message: 'Choose at least one role',
          },
        ]}
      />
    </Stack>
  );
};
