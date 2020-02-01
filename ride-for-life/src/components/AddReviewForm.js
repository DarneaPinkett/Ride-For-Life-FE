import React,{useState} from 'react';
import { Form, withFormik, yupToFormErrors} from 'formik';

const AddReviewForm = (props) => {
    const { errors, touched} = props;
}

const [ data, setData] = useState({});

return (
    <Form>
        <input type="text" name="rating" placeholder="Driver Rating"
        touched={touched.rating} errors={errors.rating} />
        <input type="text" name="revtext" placeholder="Review Text"
        touched={touched.revtext} errors={errors.revtext} />
        <SubmitBtn textDisplay={"Add Review"} />

    </Form>
)

const FormikAddReviewForm = withFormik ({
    mapPropsToValues({ rating, revtext}) {
        return {
            rating: rating || "",
            revtext: rextext || "",
        };
    },

    validationSchema: Yup.object().shape({
        revtext: Yup.string().required("Please input review"),
        rating: Yup.number().required("Please input rating")
        .typeError("Please use only digits")
    })
})