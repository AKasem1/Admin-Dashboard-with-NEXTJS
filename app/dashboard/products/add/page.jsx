import { addProduct } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/products/addProduct/addProductPage.module.css';

const AddProductPage = () => {
    return (
      <div className={styles.container}>
        <form className={styles.form} action={addProduct}>
          <input placeholder='title' name='title' type='text' required />
          <select name='cat' required id='cat'>
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <input placeholder='price' name='price' type='number' required />
          <input placeholder='stock' name='stock' type='number' required />
          <input placeholder='color' name='color' type='text' required />
          <input placeholder='size' name='size' type='text' required />
          <textarea 
          placeholder='Description' 
          name='desc' 
          required
          id='desc'
          rows={16}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
export default AddProductPage;