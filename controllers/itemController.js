const Item = require('../model/Item')

const addItem = async (req,res) => {
    const {title, category, code, isAvailable, imageUrl, shop} = req.body

    try {
        const newItem = new Item({
            tite: title,
            catagory:category,
            code:code,
            isAvailable: isAvailable,
            imageUrl: imageUrl,
            restaurant: restaurant
        })
    
        await newItem.save()
        res.status(201).json({
            status:true,
            message: "Product added successfully"
        });

    } catch (error) {
        res.status(500).json({
            status:false,
            message: error.message
        });
        
    }
    


}

const getItemById = async(req, res)=>{
    const itemId = req.params.itemId
    try {
        const item = await Item.findOne(itemId)
        if(!item){
            res.status(404).json({ status: false, message: "item is not found" });
        }
        else{
            res.status(200).json(item);
        }

        
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }

    
}

const getItemByShop = async(req, res) =>{
    const shopId = req.params.shopId
    try {
        const items = await Item.findOne({
            shopId: shopId
        })
        if(!items){
            res.status(404).json({ status: false, message: "No such shop is found" });
        }
        else{
            res.status(200).json(items);
        }

        
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }


const updateItem = async(req, res)=>{
    const item = req.body
}
}

const deleteItemById = async(req, res)=>{
    const itemId = req.params.itemId;
    try {
        const item = await Item.findById(itemId)
        if(!item){
            res.status(404).json({
                status: flase,
                message: "Item not found"
            })
        }
        else{
            await Item.findByIdAndDelete(itemId)
            res.status(200).json({
                status: true,
                message: "Item deleted successfully"
            })

        }
        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
        
    }
    
}

const updateItemById = async(req, res)=>{
    const itemId = req.params.itemId;
    const updatedProperties = req.body
    try {
        const item = await Item.findById(itemId)
        if(!item){
            res.status(404).json({
                status: flase,
                message: "Item not found to update"
            })
        }
        else{
            // await Item.findByIdAndUpdate(itemId,updatedItem,{
            //     new: true,
            //     runValidators: true
            // })
            Object.assign(item, updatedProperties);
            await item.save({ validateBeforeSave: true });

            res.status(200).json({
                status: true,
                message: "Item updated successfully",
                updatedItem : updatedItem
            })

        }
        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
        
    }
    
}

const toggleAvailability = async(req, res)=>{
    const itemId = req.params.itemId;
	try {
		const item = await Item.findById(itemId);
		if (item) {
			item.isAvailable = !item.isAvailable;
			await item.save();
			res.status(200).json({
				status: true,
				message: "Item availability toggled successfully",
				isAvailable: item.isAvailable,
			});
		} else {
			res.status(404).json({ status: false, message: "item not found" });
		}
	} catch (error) {
		res.status(500).json({ status: false, message: error.message });
	}
}



module.exports = {getItemById, getItemByShop, updateItemById, deleteItemById, addItem, toggleAvailability}