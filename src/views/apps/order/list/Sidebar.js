// ** Custom Components
import Sidebar from "@components/sidebar"

import { isObjEmpty } from "@utils"

import classnames from "classnames"
import { useForm } from "react-hook-form"
import { Button, FormGroup, Label, FormText, Form, Input } from "reactstrap"

import { addOrder } from "../store/action"
import { useDispatch } from "react-redux"

const SidebarNewOrder = ({ open, toggleSidebar }) => {
  const dispatch = useDispatch()

  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (values) => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addOrder({
          // sku: values.sku,
          // slug: values.slug,
          // name: values.name,
          // position: values.position,
          // image_order: values.image_order,
          // status: values.status,
          // additional: values.additional,
          // description: values.description
        })
      )
    }
  }

  return (
    <Sidebar
      size="lg"
      open={open}
      title="New Order"
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>
            Sku <span className="text-danger">*</span>
          </Label>
          <Input
            name="sku"
            id="sku"
            placeholder="Sku"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["sku"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Slug <span className="text-danger">*</span>
          </Label>
          <Input
            name="slug"
            id="slug"
            placeholder="Slug"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["slug"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Name <span className="text-danger">*</span>
          </Label>
          <Input
            name="name"
            id="name"
            placeholder="Order Name"
            // value={name}
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["name"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Position <span className="text-danger">*</span>
          </Label>
          <Input
            type="number"
            name="position"
            id="position"
            placeholder="Position"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["position"] })}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Choose Image <span className="text-danger">*</span>
          </Label>
          <Input
            type="file"
            name="image_order"
            id="image_order"
            innerRef={register({ required: true })}
            className={classnames({ "is-invalid": errors["image_order"] })}
          />
          <FormText color="muted">receive format JPG, JPEG, PNG, SVG</FormText>
        </FormGroup>
        <FormGroup>
          <Label>
            Additional <span className="text-danger">*</span>
          </Label>
          <Input
            name="additional"
            id="additional"
            placeholder="Additional..."
            innerRef={register({ required: true })}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Description <span className="text-danger">*</span>
          </Label>
          <Input
            name="description"
            id="description"
            placeholder="description..."
            innerRef={register({ required: true })}
          />
        </FormGroup>
        <Button type="submit" className="mr-1" color="primary">
          Submit
        </Button>
        <Button type="reset" color="secondary" outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewOrder
