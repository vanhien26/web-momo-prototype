# Form Integration & Validation Patterns

Form elements in `@momo-webplatform/mobase` integrate with `react-hook-form` and validation engines like `zod`. This guide defines how to create validate-ready forms.

---

## 1. Complete Form Schema Example

Always define a Zod validation schema, bind the form using `useForm`, and wrap the component block using the nested form primitives.

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  TextInput,
  Button,
  useToast
} from "@momo-webplatform/mobase";

// 1. Define schema
const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { toast } = useToast();

  // 2. Initialize form state
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  // 3. Submit handler
  const onSubmit = (data: LoginFormValues) => {
    toast({
      title: "Success",
      description: `Logged in as: ${data.username}`,
      variant: "success"
    });
  };

  return (
    // Form component acts as FormProvider
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                {/* Note: TextInput handles its own styles. Do not wrap value binding manually */}
                <TextInput placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <TextInput type="password" placeholder="Enter password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </Form>
  );
}
```

---

## 2. Using Form Components Directly

If you are not using `react-hook-form`, primitive inputs (like `TextInput` or `TextArea`) handle standard HTML bindings.

```tsx
import { useState } from "react";
import { TextInput, TextArea } from "@momo-webplatform/mobase";

export function SimpleFeedbackForm() {
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    setIsError(!val.includes("@"));
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <TextInput
        label="Email"
        value={email}
        onChange={handleEmailChange}
        isError={isError}
        message={isError ? "Invalid email address format" : ""}
        withClearButton={true}
        onClickClear={() => setEmail("")}
        size={1} // Numerical size (1 or 2)
      />
      <TextArea
        label="Your Comments"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Type here..."
      />
    </div>
  );
}
```

---

## 3. Numeric Sizes in Inputs

Unlike Tailwind or typical design libraries that use string sizes (like `"sm"` or `"md"`), input elements in Mobase use numeric types for height variants:

*   **`size={1}`**: Compact fields (typically 40px tall). Good for crowded pages or sidebar configs.
*   **`size={2}`**: Default fields (typically 48px tall). Recommended size for mobile layouts and standard forms.
