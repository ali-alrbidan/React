import { ModeToggle } from "@/components/mode-toggle"

import { Button, DatePicker } from "antd"


const PublicPage = () => {
  return (
    <div> <>
  <DatePicker />
    <h2 className="text-gray-800 dark:text-gray-300">kkkkkkkkk</h2>
    <ModeToggle />
    <Button type="primary" loading={true} >{"do whate you want"}</Button>
  </></div>
  )
}

export default PublicPage