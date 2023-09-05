"use client"

import { FC } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { buttonVariants } from "@/components/ui/Button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/Form"
import { ISelectOption } from "@/types"
import { cn } from "@/lib/utils"

const formSchema = z
  .object({
    app: z
      .string({
        required_error: "Please select an email to display."
      })
      .max(20, "Maximum letters"),
    partner: z
      .string({
        required_error: "Please select an email to display."
      })
      .max(20, "Maximum letters"),
    country: z
      .string({
        required_error: "Please select an email to display."
      })
      .max(20, "Maximum letters"),
    channel: z
      .string({
        required_error: "Please select an email to display."
      })
      .max(20, "Maximum letters"),
    metric: z
      .string({
        required_error: "Please select an email to display."
      })
      .max(20, "Maximum letters")
  })
  .required()

const Dashboard: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("data:: ", data)
  }

  const options: ISelectOption[] = [
    { value: "all", label: "All" },
    { value: "banana", label: "Banana" },
    {
      value: "orange",
      label: "Orange"
    }
  ]

  return (
    <div className='w-full bg-neutral-100 flex items-center justify-center p-6'>
      <div className='w-full h-full bg-white p-12 rounded-md'>
        <h3 className='font-semibold text-xl mb-4'>Define which data to check</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex gap-4'>
              <FormField
                control={form.control}
                name='app'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} {...field} defaultValue={field.value}>
                      <SelectTrigger className='w-40'>
                        <SelectValue placeholder='App' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {options.map((option: ISelectOption) => {
                            return (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <p>{form.formState.errors.app?.message}</p>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='partner'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} {...field} defaultValue={field.value}>
                      <SelectTrigger className='w-40'>
                        <SelectValue placeholder='Partner' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {options.map((option: ISelectOption) => {
                            return (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <p>{form.formState.errors.partner?.message}</p>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='country'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} {...field} defaultValue={field.value}>
                      <SelectTrigger className='w-40'>
                        <SelectValue placeholder='Country' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {options.map((option: ISelectOption) => {
                            return (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <p>{form.formState.errors.country?.message}</p>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='channel'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} {...field} defaultValue={field.value}>
                      <SelectTrigger className='w-40'>
                        <SelectValue placeholder='Channel' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {options.map((option: ISelectOption) => {
                            return (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <p>{form.formState.errors.channel?.message}</p>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='metric'
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Metric</FormLabel>
                  <Select onValueChange={field.onChange} {...field} defaultValue={field.value}>
                    <SelectTrigger className='w-96'>
                      <SelectValue placeholder='Metric' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {options.map((option: ISelectOption) => {
                          return (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          )
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p>{form.formState.errors.metric?.message}</p>
                </FormItem>
              )}
            />
            <input className={cn(buttonVariants({ variant: "default" }))} type='submit' />
          </form>
        </Form>
      </div>
    </div>
  )
}
export default Dashboard
