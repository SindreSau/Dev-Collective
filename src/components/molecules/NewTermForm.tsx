/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string(),
  abbreviation: z
    .string()
    .max(10, { message: "Abbreviations can't be longer than 10 characters" })
    .optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const NewTermForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      abbreviation: "",
      description: "",
      tags: [],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  const formFields = [
    {
      name: "Term",
      label: "Term",
      description: "This is the term you want to add, in it's full form.",
      type: "text",
      placeholder: "Term",
    },
    {
      name: "abbreviation",
      label: "Abbreviation",
      description:
        "Please add a short abbreviation for the term if there is one.",
      type: "text",
      placeholder: "Abbreviation",
    },
    {
      name: "description",
      label: "Description",
      description:
        "Please add a description for the term for others to read and learn from.",
      type: "text",
      placeholder: "Description",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formFields.map((field) => (
          <FormField
            control={form.control}
            name={field.name as keyof z.infer<typeof formSchema>}
            key={field.name}
            render={() => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input type={field.type} placeholder={field.placeholder} />
                </FormControl>
                <FormDescription>{field.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default NewTermForm;
