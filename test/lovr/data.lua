group('data', function()
  group('Blob', function()
    test(':getName', function()
      -- Test that Blob copies its name instead of relying on Lua string staying live
      blob = lovr.data.newBlob('foo', 'b' .. 'ar')
      collectgarbage()
      expect(blob:getName()).to.equal('b' .. 'ar')
    end)
  end)
end)
