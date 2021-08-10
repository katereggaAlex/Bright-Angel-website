import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import formReducer from 'redux-form/immutable';
import { Field, reduxForm } from 'redux-form/immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import pdf from "../../Assets/FEES-STRUCTURE-ADMISSION-FORM.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {
  CheckboxRedux,
  SelectRedux,
  TextFieldRedux,
  SwitchRedux
} from 'redux-form-material-ui';
import { initAction, clearAction } from 'redux-form-actions';

import {
  Paper,
  MenuItem,
  InputLabel,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Typography,
  Button,
} from '@material-ui/core';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInit: {
    margin: theme.spacing(4),
    textAlign: 'center'
  },
});

const initData = {
  text: 'Full names',
  email: 'sample@mail.com',
  radio: 'P1',
  selection: 'Primary one',
  onof: true,
  checkbox: true,
  textarea: 'Enter your text here'
};

class Form extends Component {
  render() {
    const trueBool = true;
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      init,
      clear
    } = this.props;
    return (
      <div>
        <div>
           <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download Admission Form
          </Button>
        </div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                Simple Admission Form.
              </Typography>
              <Typography component="p">
                This form is to be filled in if you have not downloaded the hard copy.
                The delay between when you click (Submit) and when the alert dialog pops up is intentional, to simulate server latency.
              </Typography>
              <div className={classes.buttonInit}>
                <Button onClick={() => init(initData)} color="secondary" type="button">
                  Load your Data
                </Button>
                <Button onClick={() => clear()} type="button">
                  Clear Data
                </Button>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="text"
                    component={TextFieldRedux}
                    placeholder="Text Field"
                    label="Full Names"
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="email"
                    component={TextFieldRedux}
                    placeholder="Email Field"
                    label=" Parent's Email"
                    required
                    validate={[required, email]}
                    className={classes.field}
                  />
                </div>
                <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" />{' '}
            Other
          </label>
        </div>
      </div>
            <div className={classes.fieldBasic}>
                  <FormLabel component="label">Choose a class to be admitted to</FormLabel>
                  <Field name="radio" className={classes.inlineWrap} component={renderRadioGroup}>
                    <FormControlLabel value="option1" control={<Radio />} label="P1" />
                    <FormControlLabel value="option2" control={<Radio />} label="P2" />
                    <FormControlLabel value="option3" control={<Radio />} label="P3" />
                    <FormControlLabel value="option4" control={<Radio />} label="P4" />
                    <FormControlLabel value="option5" control={<Radio />} label="P5" />
                    <FormControlLabel value="option6" control={<Radio />} label="P6" />
                    <FormControlLabel value="option7" control={<Radio />} label="P7" />
                  </Field>
                </div>
                <div>
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="selection">previous class</InputLabel>
                    <Field
                      name="selection"
                      component={SelectRedux}
                      placeholder="Selection"
                      autoWidth={trueBool}
                    >
                      <MenuItem value="option1">Primary one</MenuItem>
                      <MenuItem value="option2">Primary two</MenuItem>
                      <MenuItem value="option3">Primary Three</MenuItem>
                      <MenuItem value="option4">Primary Four</MenuItem>
                      <MenuItem value="option5">Primary Five</MenuItem>
                      <MenuItem value="option6">Primary six</MenuItem>
                      <MenuItem value="option7">Primary Seven</MenuItem>
                    </Field>
                  </FormControl>
                </div>
                <div className={classes.fieldBasic}>
                  <FormLabel component="label">Do you have any medical problem</FormLabel>
                  <div className={classes.inlineWrap}>
                    <FormControlLabel control={<Field name="onof" component={SwitchRedux} />} label="YES/NO" />
                    <FormControlLabel control={<Field name="checkbox" component={CheckboxRedux} />} label="Promise abide with school rules" />
                  </div>
                </div>
                <div className={classes.field}>
                  <Field
                    name="textarea"
                    className={classes.field}
                    component={TextFieldRedux}
                    placeholder="Textarea"
                    label="Write details about you medical problem"
                    multiline={trueBool}
                    rows={4}
                  />
                </div>
                <div>
                  <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
                    Submit
                  </Button>
                  <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(Form);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(FormInit);