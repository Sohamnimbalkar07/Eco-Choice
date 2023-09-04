DELIMITER $

CREATE TRIGGER UpdateTotalUnits
AFTER INSERT ON order_item
FOR EACH ROW
BEGIN
    
    UPDATE product
    SET total_units = total_units - NEW.quantity
    WHERE id = NEW.product_id;
END $

DELIMITER ;
