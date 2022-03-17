const {Shop, Item} = require("../src/gilded_rose");
const inventory = require('../src/inventory');

describe('End of day', () => {
  it('should decerement sellIn and quality values for a normal item', () => {
    const normalItem = new Item({
      name: inventory.Normal,
      sellIn: 3, 
      quality: 5
    });

    const shop = new Shop([normalItem]);

    shop.updateQuality();

    expect(normalItem.sellIn).toBe(2);
    expect(normalItem.quality).toBe(4);
  });

  it('should decrement sellIn and increment quality for aged brie', () => {
    const agedBrie = new Item({
      name: inventory.AgedBrie, 
      sellIn: 3, 
      quality:5
    });

    const shop = new Shop([agedBrie]);

    shop.updateQuality();

    expect(agedBrie.sellIn).toBe(2);
    expect(agedBrie.quality).toBe(6);
  });



  describe('Backstage Pass', () => {
    it('sellIn day less than 5 should increase quality by 3', () => {
      const backstagePass = new Item({
        name: inventory.BackstagePass, 
        sellIn: 3, 
        quality: 5
      });
  
      const shop = new Shop([backstagePass]);
  
      shop.updateQuality();
  
      expect(backstagePass.sellIn).toBe(2)
      expect(backstagePass.quality).toBe(8)
    });

    it('sellIn day less than 10 should increase quality by 2', () => {
      const backstagePass = new Item({
        name: inventory.BackstagePass,
        sellIn: 9, 
        quality: 5
      });
  
      const shop = new Shop([backstagePass]);
  
      shop.updateQuality();
  
      expect(backstagePass.sellIn).toBe(8)
      expect(backstagePass.quality).toBe(7)
    });

    it('sellIn day less than 0 should set quality to 0', () => {
      const backstagePass = new Item({
        name: inventory.BackstagePass,
        sellIn: 0, 
        quality: 5
      });
  
      const shop = new Shop([backstagePass]);
  
      shop.updateQuality();
  
      expect(backstagePass.sellIn).toBe(-1)
      expect(backstagePass.quality).toBe(0)
    });
  });
});


