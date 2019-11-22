import React, { Fragment, useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { Save, Delete } from '@material-ui/icons';

import Description from './ProductAdd/Description';
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
		// backgroundColor: "#fff"
	},
	formControl: {
		minWidth: '100%'
	},
	chips: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	chip: {
		margin: 2
	}
}));

const names = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};
const AddProduct = () => {
	const classes = useStyles();
	const value = {
		brand: '',
		components: '',
		name: '',
		sku: '',
		barcode: '',
		price: 0,
		quantity: 1,
		overview: '',
		tags: '',
		category: []
	};

	const [data, setData] = React.useState(value);
	const [image, setImage] = useState({ open: false, files: [] });
	const {
		brand,
		category,
		barcode,
		name,
		sku,
		tags,
		price,
		overview,
		quantity
	} = data;
	const { open, files } = image;
	const handleClose = () => {
		setImage({
			open: false
		});
	};

	const handleOpen = () => {
		setImage({
			open: true
		});
	};

	const onSaveImage = files => {
		setImage({
			files,
			open: false
		});
	};

	const onChange = event =>
		setData({ ...data, [event.target.name]: event.target.value });
	return (
		<Box className={classes.root}>
			<Container>
				<h1>Add Product</h1>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<TextField
							required
							fullWidth
							label='Product Name'
							name='name'
							className={classes.textField}
							margin='normal'
							value={name}
							onChange={onChange}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							fullWidth
							label='Barcode'
							name='barcode'
							className={classes.textField}
							margin='normal'
							value={barcode}
							onChange={onChange}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							fullWidth
							label='Price'
							name='price'
							className={classes.textField}
							margin='normal'
							value={price}
							onChange={onChange}
							type='number'
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							fullWidth
							label='Quantity'
							name='quantity'
							className={classes.textField}
							margin='normal'
							value={quantity}
							onChange={onChange}
							type='number'
						/>
					</Grid>
					<Grid item xs={3}>
						<FormControl className={classes.formControl}>
							<InputLabel id='category'>Category</InputLabel>
							<Select
								labelId='category'
								multiple
								value={category}
								name='category'
								onChange={onChange}
								input={<Input id='select-multiple-chip' />}
								renderValue={selected => (
									<div className={classes.chips}>
										{selected.map(value => (
											<Chip
												key={value}
												label={value}
												className={classes.chip}
											/>
										))}
									</div>
								)}
								MenuProps={MenuProps}
							>
								{names.map(name => (
									<MenuItem key={name} value={name}>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={3}>
						<FormControl className={classes.formControl}>
							<InputLabel id='brand'>Brand</InputLabel>
							<Select
								labelId='brand'
								value={brand}
								name='brand'
								onChange={onChange}
								autoWidth
							>
								<MenuItem value=''>Select Brand</MenuItem>
								<MenuItem value='msi'>MSI</MenuItem>
								<MenuItem value='asus'>Asus</MenuItem>
								<MenuItem value='zotac'>Zotac</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={3}>
						<FormControl className={classes.formControl}>
							<InputLabel id='tags'>Tags</InputLabel>
							<Select
								labelId='tags'
								value={tags}
								name='tags'
								onChange={onChange}
								autoWidth
							>
								{names.map(name => (
									<MenuItem key={name} value={name}>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container spacing={3}>
					<Grid item xs={6}>
						{' '}
						<TextField
							required
							multiline={true}
							fullWidth
							label='Overview'
							name='overview'
							className={classes.textField}
							margin='normal'
							value={overview}
							onChange={onChange}
							type='number'
						/>
					</Grid>

					<Grid item xs={6}>
						<FormControl className={classes.formControl}>
							<Button
								variant='contained'
								className={classes.button}
								onClick={handleOpen}
							>
								Upload Images
							</Button>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<h1>Description</h1>
						<p>Add fields for description of the product.</p>
						<Description />
					</Grid>
					<DropzoneDialog
						name='img'
						open={open}
						onClose={handleClose}
						onSave={onSaveImage}
						maxFileSize={50000000}
						acceptedFiles={['image/*', 'video/*', 'application/*']}
						filesLimit={5}
						showPreviews={true}
					/>
				</Grid>

				<Grid container style={{ marginTop: '20px' }}>
					<Grid item>
						<Button
							variant='contained'
							style={{
								backgroundColor: '#2ecc71',
								color: '#fff',
								marginRight: '20px'
							}}
							size='large'
							className={classes.button}
							startIcon={<Save />}
						>
							Save
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant='contained'
							color='secondary'
							size='large'
							className={classes.button}
							startIcon={<Delete />}
							style={{ marginRight: '20px' }}
						>
							Delete
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default AddProduct;
