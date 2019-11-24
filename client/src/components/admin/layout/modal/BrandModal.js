import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
	getBrand,
	addBrand,
	deleteBrand
} from '../../../../actions/optionsActions';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { Add as AddIcon } from '@material-ui/icons';
import ModalList from './modalList/ModalList';

const useStyles = makeStyles(theme => ({
	grid: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'row',
		width: '100%'
	}
}));

const BrandModal = ({
	show,
	set,
	options: { brands },
	getBrand,
	addBrand,
	deleteBrand
}) => {
	const classes = useStyles();
	const [title, setTitle] = useState('');
	useEffect(() => {
		if (brands === null) getBrand();
	}, []);

	const onChange = e => setTitle(e.target.value);

	const onaddBrand = () => {
		addBrand({ title });
		clearField();
	};

	const onDelCategory = _id => {
		deleteBrand(_id);
		clearField();
	};

	const clearField = () => {
		setTitle('');
	};

	return (
		<div>
			<Dialog
				open={show}
				onClose={() => set(false)}
				fullWidth={true}
				maxWidth={'sm'}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>Brand</DialogTitle>
				<DialogContent>
					<Grid container>
						<Grid item xs={12}>
							<div>
								<div className={classes.grid}>
									<div style={{ flex: 1 }}>
										<TextField
											autoFocus
											margin='dense'
											name='title'
											value={title}
											label='Add Brand'
											fullWidth
											onChange={onChange}
										/>
									</div>
									<div style={{ flex: 0 }}>
										<Fab
											color='primary'
											aria-label='add'
											mt={2}
											style={{ marginLeft: 'auto' }}
											onClick={onaddBrand}
										>
											<AddIcon />
										</Fab>
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={12}>
							<ModalList data={brands} deleteItem={onDelCategory} />
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => set(false)} color='primary'>
						CLose
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const mapStateToProps = state => ({
	options: state.options
});

export default connect(mapStateToProps, {
	getBrand,
	addBrand,
	deleteBrand
})(BrandModal);
