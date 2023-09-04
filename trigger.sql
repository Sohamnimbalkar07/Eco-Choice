DELIMITER $

CREATE TRIGGER UpdateTotalUnits AFTER INSERT ON order_item FOR EACH ROW
BEGIN
    
    update product SET total_units = total_units - NEW.quantity where id = NEW.product_id;
END $

DELIMITER ;
