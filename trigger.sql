DELIMITER $

create trigger UpdateTotalUnits after insert on order_item for each row
BEGIN
    
    update product set total_units = total_units - NEW.quantity where id = NEW.product_id;

END $

DELIMITER ;
