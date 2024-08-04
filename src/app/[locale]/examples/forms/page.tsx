'use client';

import { Button, Code, NumberInput, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useState } from 'react';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18),
});

export default function ExampleFormsPage() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', age: 13 },
    validate: zodResolver(formSchema),
  });

  const [submittedValues, setSubmittedValues] = useState<
    typeof form.values | null
  >(null);

  return (
    <form onSubmit={form.onSubmit(setSubmittedValues)}>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <TextInput
        {...form.getInputProps('email')}
        key={form.key('email')}
        mt="md"
        label="Email"
        placeholder="Email"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        mt="md"
        label="Age"
      />
      <Button type="submit" mt="md">
        Submit
      </Button>

      <Text mt="md">Submitted values:</Text>
      <Code block>
        {submittedValues ? JSON.stringify(submittedValues, null, 2) : '–'}
      </Code>
    </form>
  );
}
