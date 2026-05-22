export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-buildings-insurance-nz',
    title: 'Understanding Buildings Insurance in New Zealand',
    excerpt: 'A comprehensive guide to buildings insurance for NZ homeowners, covering what\'s included, how it works, and how to choose the right policy.',
    date: '2026-03-15',
    category: 'Guides',
    author: 'Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    readingTime: 8,
    content: `<h2>What is Buildings Insurance?</h2>
<p>Buildings insurance is a critical form of protection for New Zealand homeowners. It covers the structure of your home – including walls, roof, floors, permanent fixtures, and built-in appliances – against damage from fire, theft, storms, and other insurable perils. Unlike contents insurance, which covers moveable items like furniture and electronics, buildings insurance protects the permanent structure of your property.</p>

<h2>Why Buildings Insurance Matters in New Zealand</h2>
<p>New Zealand faces unique environmental risks that make buildings insurance essential. Our location on the Pacific Ring of Fire means earthquake risk is a constant consideration, while our volatile weather patterns bring storms, flooding, and other natural hazards. Buildings insurance provides essential financial protection against these risks, ensuring you're not left with a massive repair bill if disaster strikes.</p>
<p>Many people don't realise that buildings insurance is often a requirement of their mortgage agreement. Lenders won't approve a home loan without proof of buildings insurance because they want to protect their investment. Even if you own your home outright, buildings insurance is prudent financial planning.</p>

<h2>What Does Buildings Insurance Cover?</h2>
<p>A standard buildings insurance policy typically covers:</p>
<ul>
<li>The building structure (walls, roof, floors)</li>
<li>Permanent fixtures (fitted kitchens, bathrooms)</li>
<li>Built-in appliances</li>
<li>Driveways and paving</li>
<li>Fences and gates</li>
<li>Sheds and outbuildings (usually up to limits)</li>
<li>Swimming pools (often with optional cover)</li>
<li>Damage from fire, theft, storms, and vandalism</li>
</ul>
<p>However, earthquake damage is covered separately by the <a href="https://www.eqc.govt.nz" target="_blank" rel="noopener noreferrer">Earthquake Commission (EQC/Toka Tu Ake)</a>, not by buildings insurance. This is an important distinction many Kiwis don't fully understand.</p>

<h2>Types of Buildings Cover</h2>
<h3>Full Replacement Value</h3>
<p>Full replacement (or indemnity) cover means your insurer will pay the full cost to rebuild or repair your home to its pre-loss condition, up to your policy limit. This is the most comprehensive option and the recommended choice for most homeowners. With full replacement, you're protected even if rebuild costs exceed your initial estimate (within reason).</p>

<h3>Sum Insured</h3>
<p>Sum insured is an agreed fixed amount set when you take out the policy. Your insurer will pay up to that amount if you have a total loss. This option requires you to accurately estimate your rebuild cost upfront. If you underestimate, you may not receive enough to fully rebuild. Sum insured policies typically have lower premiums but carry more risk of underpayment.</p>

<h2>Understanding the EQC and Earthquake Cover</h2>
<p>The <a href="https://www.eqc.govt.nz" target="_blank" rel="noopener noreferrer">Earthquake Commission</a> provides automatic earthquake cover for most residential buildings in New Zealand. EQC covers damage up to $300,000 plus GST for homes that fall within the cap. If your home requires more than that to rebuild, your buildings insurer covers the excess.</p>
<p>This dual-layer system means you're fully protected for earthquake damage, provided you maintain both EQC and buildings insurance. Some insurers also offer optional "natural disaster" or "earthquake extension" cover for additional protection above the EQC cap.</p>

<h3>How EQC and Buildings Insurance Work Together</h3>
<p>When an earthquake damages your home, the claims process works like this:</p>
<ol>
<li>You report the damage to your buildings insurer</li>
<li>Your insurer assesses whether EQC should be involved</li>
<li>EQC covers damage up to their limit ($300,000 + GST)</li>
<li>Your buildings insurer covers any additional costs above the EQC limit</li>
<li>The two organisations coordinate to avoid duplication</li>
</ol>

<h2>What Affects Your Premium?</h2>
<p>Several factors influence what you'll pay for buildings insurance:</p>
<ul>
<li><strong>Rebuild cost:</strong> The estimated cost to rebuild your home</li>
<li><strong>Location:</strong> Risk factors vary by region and neighbourhood</li>
<li><strong>Age and condition:</strong> Older homes typically cost more to insure</li>
<li><strong>Construction materials:</strong> Brick and timber vs. modern construction</li>
<li><strong>Distance from fire services:</strong> Rural properties may have higher premiums</li>
<li><strong>Claims history:</strong> Previous claims can affect pricing</li>
<li><strong>Excess level:</strong> Choosing a higher excess reduces your premium</li>
<li><strong>Natural disaster risk:</strong> Flood or landslide risk in your area</li>
<li><strong>Security features:</strong> Alarms and other security can reduce premiums</li>
</ul>

<h2>How to Choose the Right Buildings Insurance</h2>
<p>When comparing buildings insurance policies, consider:</p>
<ul>
<li>The type of cover (full replacement vs. sum insured)</li>
<li>The level of cover provided (especially for optional extras)</li>
<li>The excess amount</li>
<li>Claims service reputation and speed</li>
<li>Customer reviews and ratings</li>
<li>Whether the insurer is <a href="https://www.ifso.nz" target="_blank" rel="noopener noreferrer">IFSO-certified</a> (dispute resolution)</li>
<li>Available discounts (security systems, good building condition, etc.)</li>
</ul>
<p>Use <a href="/compare">our comparison tool</a> to view different insurers side-by-side and find a policy that suits your needs and budget.</p>

<h2>FAQs About Buildings Insurance</h2>
<p>For more detailed answers, check out <a href="/">our FAQs section</a> which covers common questions about buildings insurance in New Zealand.</p>

<h2>Conclusion</h2>
<p>Buildings insurance is a non-negotiable part of protecting your most valuable asset – your home. By understanding what's covered, comparing policies from different insurers, and ensuring you have adequate cover, you can have peace of mind knowing you're protected against unexpected costs from damage or disaster. Don't leave it to chance – get quotes today and find the right buildings insurance for your situation.</p>`,
  },
  {
    slug: 'earthquake-cover-what-nz-homeowners-need-to-know',
    title: 'Earthquake Cover: What NZ Homeowners Need to Know',
    excerpt: 'A detailed guide to earthquake insurance in New Zealand, including EQC cover, building insurance requirements, and how the system works.',
    date: '2026-03-08',
    category: 'Guides',
    author: 'James Thornton',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    readingTime: 7,
    content: `<h2>Living with Earthquake Risk in New Zealand</h2>
<p>New Zealand sits on the Pacific Ring of Fire, making earthquakes an inevitable part of life for Kiwis. Our location on the boundary between the Pacific and Australian tectonic plates means we experience regular seismic activity. Understanding earthquake insurance is therefore essential for every NZ homeowner.</p>
<p>The 2011 Christchurch earthquakes and the 2016 Kaikōura earthquake reminded us of the devastating financial impact earthquakes can have. Rebuilding costs run into hundreds of millions of dollars, and without proper insurance, homeowners face ruinous financial consequences.</p>

<h2>The Earthquake Commission (EQC/Toka Tu Ake)</h2>
<p>The <a href="https://www.eqc.govt.nz" target="_blank" rel="noopener noreferrer">Earthquake Commission</a> (now operating as Toka Tu Ake) is New Zealand's unique government-backed earthquake insurance provider. Unlike traditional insurance companies, EQC is a Crown entity that provides earthquake cover automatically to most residential properties.</p>

<h3>What Does EQC Cover?</h3>
<p>EQC cover applies automatically to residential properties in New Zealand and covers:</p>
<ul>
<li>Damage to the building structure from earthquakes</li>
<li>Land damage (settlement, subsidence)</li>
<li>Damage to swimming pools and decks</li>
<li>Loss of contents due to earthquake (limited cover)</li>
</ul>
<p>The current EQC cover limit is $300,000 plus GST for most homes. This cap has increased from previous levels, but for larger or higher-value properties, this may not be sufficient.</p>

<h3>Is EQC Cover Automatic?</h3>
<p>Yes, if you have a buildings insurance policy with a licensed insurer in New Zealand, EQC cover is automatic. You don't need to arrange it separately or pay for it directly. Your buildings insurance premium includes the cost of EQC cover. However, you must maintain an active buildings insurance policy to benefit from EQC cover.</p>

<h2>How EQC and Buildings Insurance Work Together</h2>
<p>The relationship between EQC and buildings insurance is crucial to understand. They work as a two-layer protection system:</p>

<h3>Layer 1: EQC Cover</h3>
<p>EQC pays first for earthquake damage, up to their limit of $300,000 plus GST. This is the primary layer of protection.</p>

<h3>Layer 2: Buildings Insurance</h3>
<p>Your buildings insurance covers any damage costs above the EQC limit. If your rebuild cost is $600,000, for example, EQC covers $300,000 plus GST, and your buildings insurer covers the remaining amount (less your excess).</p>

<h3>Coordination Between EQC and Your Insurer</h3>
<p>Your buildings insurance company coordinates with EQC during claims. You typically lodge a claim with your insurer, who then manages the EQC interaction. The two organisations work together to avoid duplication and ensure you receive fair compensation.</p>

<h2>Additional Earthquake Cover Options</h2>
<p>Some buildings insurance providers offer optional cover above the EQC limit:</p>

<h3>Earthquake Extension</h3>
<p>Some insurers provide "earthquake extension" cover that extends your protection above the EQC cap. This is valuable for homeowners with high-value properties.</p>

<h3>Natural Disaster Cover</h3>
<p>Some policies include "natural disaster" cover that encompasses earthquakes, volcanic eruptions, and other natural events. This broader cover is often optional.</p>

<h2>Important Considerations About Earthquake Risk</h2>

<h3>Not All Properties Are Equal Risk</h3>
<p>Earthquake risk varies significantly across New Zealand. Wellington, Canterbury, and the West Coast face higher seismic risk. Your location affects your buildings insurance premium and the availability of additional earthquake cover.</p>

<h3>Aftershocks and Cumulative Damage</h3>
<p>Major earthquakes are often followed by significant aftershocks. Some policies require that claims be lodged within a specific timeframe after the initial earthquake. Damage from aftershocks may be assessed as cumulative damage from the initial event.</p>

<h3>Building Age and Construction</h3>
<p>Older buildings and those with poor structural integrity are at higher risk in earthquakes. <a href="https://www.building.govt.nz" target="_blank" rel="noopener noreferrer">Building Performance NZ</a> has introduced new building standards designed to improve earthquake resilience.</p>

<h2>What Earthquake Insurance Does NOT Cover</h2>
<p>It's important to understand the limitations:</p>
<ul>
<li>Damage caused by poor maintenance or neglect</li>
<li>Gradual damage that occurred before the earthquake</li>
<li>Contents (unless specifically included)</li>
<li>Loss of rent or business interruption (unless optional cover is added)</li>
<li>Damage from tsunami (though sometimes covered under natural disaster provisions)</li>
</ul>

<h2>Steps to Protect Your Property</h2>

<h3>1. Maintain Adequate Insurance</h3>
<p>Keep your buildings insurance policy active and ensure your sum insured reflects current rebuild costs. Review your policy annually.</p>

<h3>2. Improve Structural Resilience</h3>
<p>Consider earthquake-strengthening measures such as foundation bolting or bracing for older homes. Some of these improvements may reduce your insurance premium.</p>

<h3>3. Create an Emergency Plan</h3>
<p>Prepare your household with emergency supplies, a communication plan, and knowledge of what to do during and after an earthquake.</p>

<h3>4. Keep Documentation</h3>
<p>Maintain photos of your property and records of renovations and improvements. This helps expedite claims if needed.</p>

<h2>Common Myths About Earthquake Insurance</h2>

<h3>Myth: EQC Is Expensive</h3>
<p>EQC cover is included in your buildings insurance premium. You don't pay separately, and the cost is generally reasonable given the protection provided.</p>

<h3>Myth: Small Earthquakes Aren't Worth Claiming</h3>
<p>If you have damage from even a small earthquake, it's worth reporting to your insurer. Minor repairs can sometimes be covered.</p>

<h3>Myth: EQC Covers Everything</h3>
<p>EQC has limits and may not cover all earthquake-related damage, especially for high-value properties. This is why buildings insurance is essential.</p>

<h2>Conclusion</h2>
<p>Earthquake cover is a critical component of buildings insurance for every NZ homeowner. The combination of EQC and buildings insurance provides comprehensive protection, but you must understand how they work together and maintain both policies. Living in an earthquake-prone country requires proactive risk management – don't leave your home unprotected.</p>`,
  },
  {
    slug: 'full-replacement-vs-agreed-value',
    title: 'Full Replacement vs Agreed Value: Which Insurance Is Right for You?',
    excerpt: 'Understanding the key differences between full replacement and agreed value (sum insured) buildings insurance to make the right choice.',
    date: '2026-02-28',
    category: 'Guides',
    author: 'Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80',
    readingTime: 6,
    content: `<h2>Two Approaches to Buildings Insurance</h2>
<p>When selecting buildings insurance, one of the most important decisions you'll make is choosing between full replacement value and agreed value (sum insured) cover. These represent fundamentally different approaches to determining how much your insurer will pay if your home is damaged or destroyed.</p>

<h2>What is Full Replacement Value?</h2>
<p>Full replacement value, also called "indemnity" cover, means your insurer will pay whatever it costs to rebuild or repair your home to its condition before the loss. There's no fixed amount – instead, the insurer pays for actual repairs or rebuilds, up to your policy limit.</p>

<h3>How Full Replacement Works</h3>
<p>Let's say your home is destroyed in a fire. The insurer sends assessors to determine the cost to rebuild it to its original standard. If rebuild costs turn out to be $600,000, that's what they pay (up to your policy limit). If costs exceed your estimate due to changed building codes or increased material costs, you're still covered.</p>

<h3>Advantages of Full Replacement Cover</h3>
<ul>
<li><strong>Peace of mind:</strong> You don't have to guess the exact rebuild cost</li>
<li><strong>Automatic inflation adjustment:</strong> Costs are assessed at the time of claim</li>
<li><strong>Protection against underinsurance:</strong> You won't be caught short if rebuild costs exceed your estimate</li>
<li><strong>Building code compliance:</strong> New rebuilds must meet current building codes, which may be more expensive</li>
<li><strong>Recommended by experts:</strong> Most insurance professionals recommend full replacement cover</li>
</ul>

<h3>Disadvantages of Full Replacement Cover</h3>
<ul>
<li><strong>Higher premium:</strong> Full replacement cover typically costs more than agreed value</li>
<li><strong>More complex claims:</strong> Disputes may arise about true rebuild cost</li>
<li><strong>Policy limits still apply:</strong> You must set a reasonable policy limit</li>
</ul>

<h2>What is Agreed Value (Sum Insured)?</h2>
<p>Agreed value, commonly called "sum insured," is a fixed amount you and your insurer agree upon when taking out the policy. In the event of a total loss, the insurer pays up to that amount, regardless of actual rebuild costs.</p>

<h3>How Agreed Value Works</h3>
<p>When you purchase your policy, you estimate your home's rebuild cost and agree on a sum insured with your insurer – say $550,000. If your home is destroyed, the insurer pays up to $550,000. If actual rebuild costs are less, you benefit from the difference. If they're more, you're responsible for the shortfall.</p>

<h3>Advantages of Agreed Value Cover</h3>
<ul>
<li><strong>Lower premium:</strong> Agreed value policies typically cost less than full replacement</li>
<li><strong>Simple claims process:</strong> No debate about what rebuild costs should be</li>
<li><strong>Clear limits:</strong> You know exactly what you'll receive in the event of total loss</li>
<li><strong>Potentially cost-effective:</strong> If your estimate is accurate and rebuild costs don't escalate</li>
</ul>

<h3>Disadvantages of Agreed Value Cover</h3>
<ul>
<li><strong>Underinsurance risk:</strong> If you underestimate rebuild cost, you won't receive enough</li>
<li><strong>Inflation concerns:</strong> Building cost inflation may mean agreed value becomes inadequate</li>
<li><strong>Building code changes:</strong> New codes may require more expensive construction</li>
<li><strong>Your responsibility:</strong> You must accurately assess rebuild cost yourself</li>
<li><strong>No flexibility:</strong> If circumstances change, you're locked into your estimate</li>
</ul>

<h2>A Practical Comparison</h2>

<h3>Scenario: Total Loss Claim</h3>
<p>Your $400,000 home is destroyed in a fire. Actual rebuild cost is estimated at $500,000 (due to changed building codes and material cost increases).</p>

<table>
<tr>
<th>Scenario</th>
<th>Full Replacement Cover</th>
<th>Agreed Value Cover ($400,000)</th>
</tr>
<tr>
<td>Payout Amount</td>
<td>$500,000 (actual rebuild cost)</td>
<td>$400,000 (agreed amount)</td>
</tr>
<tr>
<td>Your Gap</td>
<td>$0</td>
<td>$100,000</td>
</tr>
<tr>
<td>Annual Premium</td>
<td>Higher</td>
<td>Lower</td>
</tr>
</table>

<h3>Scenario: Partial Claim</h3>
<p>Storm damage to your roof costs $15,000 to repair.</p>

<table>
<tr>
<th>Scenario</th>
<th>Full Replacement Cover</th>
<th>Agreed Value Cover</th>
</tr>
<tr>
<td>Payout Amount</td>
<td>$15,000 (actual repair cost)</td>
<td>$15,000 (actual repair cost)</td>
</tr>
<tr>
<td>Your Out-of-Pocket</td>
<td>Your excess</td>
<td>Your excess</td>
</tr>
</table>

<h2>Factors to Consider When Choosing</h2>

<h3>Property Value and Risk Assessment</h3>
<p>For high-value properties, full replacement cover is generally recommended. The risk of underinsurance is too great with agreed value.</p>

<h3>Your Home's Age and Condition</h3>
<p>Older homes may have more hidden repair costs, making full replacement preferable. Modern homes with clear rebuild specifications might suit agreed value.</p>

<h3>Building Code Compliance</h3>
<p>If your home requires significant upgrades to meet current <a href="https://www.building.govt.nz" target="_blank" rel="noopener noreferrer">building codes</a> after damage, full replacement cover protects you from unexpected additional costs.</p>

<h3>Your Financial Position</h3>
<p>If you can't afford a shortfall between agreed value and actual rebuild cost, full replacement is safer.</p>

<h3>Inflation Expectations</h3>
<p>In inflationary periods, agreed value may become inadequate over time. Full replacement automatically accounts for cost increases at claim time.</p>

<h2>Making Your Decision</h2>

<h3>Get a Professional Valuation</h3>
<p>If choosing agreed value, obtain a professional rebuild cost valuation. Don't guess – underestimating is a common and costly mistake.</p>

<h3>Review Annually</h3>
<p>Whether you choose full replacement or agreed value, review your insurance annually. Building costs change, and your circumstances may shift.</p>

<h3>Ask Your Insurer</h3>
<p>When <a href="/compare">comparing insurance policies</a>, ask each insurer to clarify what's included in their full replacement definition and what limits apply.</p>

<h3>Consider the Premium Difference</h3>
<p>Calculate the actual premium difference between the two options. Sometimes the difference is modest enough that full replacement is clearly the better choice.</p>

<h2>What Most NZ Homeowners Choose</h2>
<p>Industry trends show that most NZ homeowners are moving towards full replacement cover. The peace of mind and protection against underinsurance generally outweigh the modest additional premium cost. Insurance experts consistently recommend full replacement for residential properties.</p>

<h2>Conclusion</h2>
<p>While agreed value (sum insured) cover offers lower premiums, full replacement value typically provides better protection for NZ homeowners. The risk of underestimating rebuild costs and being left short is significant. Unless you can afford a shortfall, full replacement cover is the safer choice for protecting your home and financial security.</p>`,
  },
  {
    slug: 'top-5-claims-nz-homeowners-face',
    title: 'Top 5 Claims NZ Homeowners Face: What You Need to Know',
    excerpt: 'Discover the most common buildings insurance claims made by NZ homeowners and how to protect yourself against them.',
    date: '2026-02-20',
    category: 'Industry Insights',
    author: 'James Thornton',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    readingTime: 9,
    content: `<h2>Understanding Common Insurance Claims</h2>
<p>Insurance claims data reveals fascinating patterns about the risks NZ homeowners actually face. Understanding the most common claims helps you identify vulnerabilities in your own home and ensure your buildings insurance covers these scenarios. Let's examine the top five claims and what you can do to minimise your risk.</p>

<h2>1. Storm and Weather Damage (Most Common)</h2>
<p>Storm damage is by far the most frequent buildings insurance claim in New Zealand. Our volatile weather patterns bring strong winds, heavy rain, hail, and flooding that can cause substantial property damage.</p>

<h3>Common Storm Damage Claims</h3>
<ul>
<li>Roof damage from high winds or hail</li>
<li>Water ingress from heavy rain</li>
<li>Broken windows and doors</li>
<li>Damage to gutters and downpipes</li>
<li>Tree damage affecting the structure</li>
<li>Flooding from excessive rainfall</li>
</ul>

<h3>How to Reduce Storm Risk</h3>
<ul>
<li>Maintain your roof in good condition; check after winter</li>
<li>Clear gutters and downpipes regularly</li>
<li>Trim tree branches that overhang your home</li>
<li>Install storm shutters or impact-resistant windows if in high-wind areas</li>
<li>Ensure adequate drainage around your property</li>
<li>Secure outdoor items that could become projectiles in wind</li>
</ul>

<h3>Insurance Considerations</h3>
<p>Most buildings insurance covers storm damage as standard. However, some policies may have limits on wind damage or require maintenance evidence. When making a claim, document damage with photos and get repair quotes. Having a maintained roof and gutters helps your claim succeed.</p>

<h2>2. Water Damage and Flooding</h2>
<p>Water damage is the second most common claim type, ranging from internal burst pipes to external flooding. New Zealand's changing weather patterns, particularly in flood-prone areas, have increased the frequency of water damage claims.</p>

<h3>Types of Water Damage Claims</h3>
<ul>
<li>Burst or frozen pipes</li>
<li>Leaking roofs or skylights</li>
<li>Flooding from heavy rain or overflowing streams</li>
<li>Failed guttering or drainage</li>
<li>Damage from blocked downpipes</li>
</ul>

<h3>What's Usually Covered</h3>
<p>Most policies cover accidental water damage like burst pipes. However, damage from lack of maintenance (e.g., neglected gutters causing water ingress) may not be covered. Gradual water damage is typically excluded.</p>

<h3>Prevention Strategies</h3>
<ul>
<li>Maintain gutters and downpipes throughout the year</li>
<li>Insulate pipes in cold areas to prevent freezing</li>
<li>Install a sump pump if you're in a flood-prone area</li>
<li>Grade your property so water drains away from the foundation</li>
<li>Have your roof inspected regularly</li>
<li>Know where your water shut-off valve is located</li>
</ul>

<h3>Flood Insurance Considerations</h3>
<p>If you live in a flood-prone area, ensure your policy covers flood damage. Some insurers may exclude or limit flood cover in high-risk zones. Declare flood risk to your insurer – non-disclosure could invalidate your claim.</p>

<h2>3. Fire Damage</h2>
<p>While less common than storm damage, fire claims are typically the most expensive. A house fire can result in total loss or require extensive repairs and rebuilding.</p>

<h3>Common Fire Claims Scenarios</h3>
<ul>
<li>Accidental fires from cooking or electrical faults</li>
<li>Fireplace and chimney fires</li>
<li>Wildfire damage</li>
<li>Fire from external sources affecting your property</li>
</ul>

<h3>Fire Insurance Coverage</h3>
<p>Most buildings policies cover fire damage as standard. This typically includes not just the structural damage but also smoke damage, water damage from firefighting, and loss of use while rebuilding (in some policies).</p>

<h3>Risk Reduction</h3>
<ul>
<li>Install working smoke alarms on each level</li>
<li>Have electrical systems inspected regularly</li>
<li>Clean chimneys annually if you have fireplaces</li>
<li>Keep flammable materials away from heat sources</li>
<li>Ensure gas appliances are serviced regularly</li>
<li>Create a defensible space around your home if in wildfire-prone areas</li>
</ul>

<h3>Building Insurance and Fire Protection</h3>
<p>Having functional fire safety equipment (alarms, extinguishers) may reduce your insurance premium. When claiming for fire damage, your adherence to maintenance standards will affect the claim outcome.</p>

<h2>4. Theft and Vandalism</h2>
<p>Break-ins, burglary, and vandalism represent a significant portion of buildings insurance claims. While contents theft is covered by contents insurance, damage to the building structure from break-ins and vandalism is a buildings insurance matter.</p>

<h3>Common Theft and Vandalism Claims</h3>
<ul>
<li>Broken windows and doors from break-ins</li>
<li>Damage to fences and gates</li>
<li>Graffiti and paint damage</li>
<li>Damage to fixtures during theft</li>
</ul>

<h3>What's Typically Covered</h3>
<p>Buildings insurance covers damage to the building structure from theft or vandalism. This includes replacing doors, windows, and repairing vandalism damage. However, contents stolen during the break-in would be claimed under contents insurance, not buildings insurance.</p>

<h3>Prevention Measures</h3>
<ul>
<li>Install good locks on doors and windows</li>
<li>Consider security alarms and cameras</li>
<li>Maintain good visibility around your property</li>
<li>Ensure your home looks occupied when you're away</li>
<li>Join a neighbourhood watch scheme</li>
<li>Report suspicious activity to police</li>
</ul>

<h3>Insurance Discount Opportunities</h3>
<p>Installing approved security systems may qualify you for insurance discounts. Let your insurer know about security measures you've implemented.</p>

<h2>5. Earthquake and Natural Disaster Damage</h2>
<p>While not as frequent as storm damage, earthquake and natural disaster claims can be catastrophic. The 2011 Christchurch earthquakes and other seismic events have caused billions in damage.</p>

<h3>Earthquake Insurance in New Zealand</h3>
<p>Earthquake damage is covered by the <a href="https://www.eqc.govt.nz" target="_blank" rel="noopener noreferrer">Earthquake Commission (EQC/Toka Tu Ake)</a>, which provides automatic cover up to $300,000 plus GST. Your buildings insurer covers damage above this limit. Ensure your sum insured is adequate for potential earthquake scenarios in your region.</p>

<h3>Other Natural Disasters</h3>
<p>Volcanic eruptions, landslides, and subsidence may or may not be covered depending on your policy. Some insurers offer "natural disaster" or "natural perils" cover that encompasses multiple types of events.</p>

<h3>Understanding Your Coverage</h3>
<p>Review your policy to understand exactly what's covered regarding earthquakes and other natural disasters. The combination of <a href="/sectors/residential">residential building insurance</a> and EQC should provide comprehensive natural disaster protection.</p>

<h2>What's NOT Usually Covered</h2>
<p>Understanding exclusions is as important as understanding what's covered:</p>
<ul>
<li>Gradual damage or wear and tear</li>
<li>Damage from lack of maintenance</li>
<li>Damage caused by poor workmanship in repairs</li>
<li>Cosmetic damage unless structural integrity is affected</li>
<li>Damage caused by your negligence</li>
<li>Contents (requires separate contents insurance)</li>
</ul>

<h2>Making a Claim Successfully</h2>

<h3>Act Quickly</h3>
<p>Report damage to your insurer as soon as possible. Most policies require prompt notification.</p>

<h3>Document Everything</h3>
<p>Take photos of all damage from multiple angles. Keep receipts for emergency repairs and temporary measures.</p>

<h3>Get Professional Quotes</h3>
<p>Obtain detailed repair estimates from qualified tradespeople. Your insurer may require multiple quotes.</p>

<h3>Keep Records</h3>
<p>Maintain records of your maintenance and any improvements you've made to your home. This supports your claim.</p>

<h3>Understand Your Excess</h3>
<p>Remember that your excess applies to each claim. This is the amount you must pay towards repairs.</p>

<h2>Conclusion</h2>
<p>Understanding the most common claims helps you identify risks in your home and protect yourself appropriately. Storm damage, water damage, and fire are the top three claim types in New Zealand. By maintaining your property, having appropriate <a href="/compare">buildings insurance coverage</a>, and taking preventive measures, you can minimise both the likelihood and impact of claims. Regular reviews of your policy ensure your cover remains adequate for your changing circumstances.</p>`,
  },
  {
    slug: 'landlord-insurance-protecting-your-investment',
    title: 'Landlord Insurance: Protecting Your Rental Investment',
    excerpt: 'A comprehensive guide to buildings insurance for landlords in New Zealand, covering requirements, coverage options, and protecting your investment.',
    date: '2026-02-12',
    category: 'Industry Insights',
    author: 'Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    readingTime: 7,
    content: `<h2>Why Landlords Need Buildings Insurance</h2>
<p>As a landlord in New Zealand, buildings insurance is not optional – it's a critical legal and financial requirement. Whether you own a single rental property or a portfolio of homes, buildings insurance protects your investment from catastrophic loss. Additionally, most mortgage lenders require buildings insurance as a condition of the loan, regardless of your ownership status.</p>
<p>The property investment market in New Zealand is competitive, and protecting your rental investment with comprehensive insurance is essential for long-term success.</p>

<h2>Legal Requirements for Landlords</h2>

<h3>Mortgage Lender Requirements</h3>
<p>If your rental property has a mortgage, your lender will require buildings insurance as a condition of the loan. Lenders want to protect their security, so they mandate both buildings and contents insurance. Failure to maintain insurance can result in breach of your mortgage agreement.</p>

<h3>Duty of Care to Tenants</h3>
<p>While not explicitly mandated by law, landlords have a duty of care to ensure rental properties are safe and habitable. Buildings insurance supports this by ensuring rapid repair of damage. The <a href="https://www.building.govt.nz" target="_blank" rel="noopener noreferrer">Building Performance NZ</a> provides standards for residential rental properties.</p>

<h3>Landlord Obligations</h3>
<p>Under New Zealand residential tenancy law, landlords must maintain the property in a good state of repair. Buildings insurance helps fulfil this obligation by ensuring damage is promptly addressed.</p>

<h2>Types of Landlord Buildings Insurance</h2>

<h3>Standard Buildings Insurance</h3>
<p>Standard buildings insurance covers the structure of the rental property against damage from fire, storm, theft, and other perils. It's similar to owner-occupied housing insurance but may have different terms reflecting the rental nature.</p>

<h3>Landlord-Specific Policies</h3>
<p>Some insurers offer policies specifically designed for rental properties. These may include:</p>
<ul>
<li><strong>Loss of rent cover:</strong> Pays your rental income if the property is uninhabitable due to insured damage</li>
<li><strong>Emergency accommodation:</strong> Covers costs of providing accommodation for tenants if the property is damaged</li>
<li><strong>Vacant property cover:</strong> Some policies cover periods when the property is unrented</li>
<li><strong>Landlord legal protection:</strong> Covers legal costs in disputes with tenants</li>
<li><strong>Accidental damage:</strong> Optional cover for accidental damage beyond standard perils</li>
</ul>

<h3>Comparing Coverage Options</h3>
<p>When <a href="/compare">comparing landlord insurance options</a>, consider what additional cover is most valuable for your situation. A new investor might prioritise loss of rent cover, while an experienced landlord might focus on comprehensive damage coverage.</p>

<h2>Key Coverage Decisions for Landlords</h2>

<h3>Sum Insured vs. Full Replacement</h3>
<p>Like all buildings insurance, you'll choose between sum insured and full replacement value. Full replacement is generally recommended for rental properties because it ensures rapid return to rentable condition, minimising lost income.</p>

<h3>Excess Level</h3>
<p>Choosing a higher excess reduces your premium but means you pay more when claiming. For rental properties, a reasonable excess (typically $500–$1,000) balances premium savings with manageable out-of-pocket costs.</p>

<h3>Optional Extras</h3>
<p>Decide which optional extras are worth the premium cost for your property:</p>
<ul>
<li>Loss of rent cover (recommended)</li>
<li>Legal costs cover (valuable for landlords)</li>
<li>Accidental damage cover</li>
<li>Natural disaster extensions</li>
<li>Gradual damage cover</li>
</ul>

<h2>Protecting Your Income: Loss of Rent Cover</h2>

<h3>How Loss of Rent Works</h3>
<p>If your rental property is damaged by an insured peril (fire, storm, etc.) and becomes uninhabitable, loss of rent cover reimburses your lost rental income while repairs occur. This is crucial because damage repairs can take weeks or months.</p>

<h3>Example Scenario</h3>
<p>Your $300,000 rental home suffers storm damage to the roof and interior, requiring three months of repairs. You lose $900/week in rent ($3,900/month × 3 months = $11,700 in lost income). Loss of rent cover reimburses this lost income, ensuring your mortgage and investment don't suffer.</p>

<h3>Coverage Limits</h3>
<p>Loss of rent cover typically has limits on how much weekly rent it will reimburse and how long coverage extends. Ensure the limit reflects your actual weekly rent.</p>

<h2>Landlord-Specific Risks</h2>

<h3>Tenant-Related Damage</h3>
<p>Damage caused by tenant behaviour (deliberate damage, negligence) may be excluded from standard landlord insurance. You may need to pursue claims against the tenant's bond or through legal action. Discuss tenant-caused damage with your insurer when getting a quote.</p>

<h3>Vacant Property Periods</h3>
<p>Standard buildings insurance may not cover vacant properties (those unrented for extended periods). If you have vacant periods, ensure your policy covers them or arrange interim cover. Many landlords have properties vacant while finding new tenants.</p>

<h3>Multiple Properties</h3>
<p>If you own multiple rental properties, ask about portfolio or multi-property discounts. Some insurers offer significant discounts for landlords with several properties insured together.</p>

<h2>Tenant Contents vs. Building Structure</h2>

<h3>What the Landlord Insures</h3>
<p>Landlord buildings insurance covers the building structure – walls, roof, floors, permanent fixtures, and attached appliances. It does NOT cover tenant belongings.</p>

<h3>What the Tenant Should Insure</h3>
<p>Tenants should have contents insurance to cover their personal belongings. As a landlord, you might encourage tenants to insure their contents by providing information about contents insurance options.</p>

<h3>Landlord-Provided Chattels</h3>
<p>If you provide chattels (removable items like furniture or appliances) in the rental, these should be listed separately and may need separate insurance or specific coverage in your buildings policy.</p>

<h2>EQC and Earthquake Cover for Rental Properties</h2>

<h3>EQC Automatic Cover</h3>
<p>Earthquake Commission cover applies automatically to rental properties just like owner-occupied homes. EQC covers the first $300,000 plus GST of earthquake damage.</p>

<h3>High-Value Properties</h3>
<p>For rental properties worth more than $300,000 (rebuild cost), consider additional earthquake extension cover or natural disaster cover to protect above the EQC limit.</p>

<h2>Costs and Premium Factors</h2>

<h3>What Affects Landlord Insurance Premiums</h3>
<ul>
<li>Property value and rebuild cost</li>
<li>Property location and risk factors</li>
<li>Age and condition of the building</li>
<li>Type of tenancy (residential vs. holiday rental)</li>
<li>Vacancy history and management</li>
<li>Claims history</li>
<li>Excess level chosen</li>
<li>Optional extras selected</li>
</ul>

<h3>Comparing Landlord Insurance Quotes</h3>
<p>When getting quotes for rental property insurance, ensure you're comparing similar coverage levels. Cheaper premiums might mean lower coverage or higher excess. Focus on value rather than price alone.</p>

<h2>Best Practices for Landlord Insurance</h2>

<h3>Review Annually</h3>
<p>Review your policy annually to ensure sum insured matches current rebuild costs. Property values change, and your circumstances may shift (new mortgage, different tenancy type, etc.).</p>

<h3>Maintain the Property</h3>
<p>Good property maintenance reduces damage claims and demonstrates responsible management. Keep records of maintenance performed – this supports claims if needed and may help with premium negotiations.</p>

<h3>Tenant Screening and Documentation</h3>
<p>Quality tenant screening reduces the risk of deliberate damage. Document property condition with photos before tenants move in, making damage claims easier to process.</p>

<h3>Clear Tenant Communications</h3>
<p>Provide tenants with information about insurable risks and their responsibilities. A well-informed tenant is less likely to inadvertently cause damage.</p>

<h3>Document Everything</h3>
<p>Keep records of:</p>
<ul>
<li>Property photos (regular updates)</li>
<li>Maintenance and repairs performed</li>
<li>Tenant agreements and correspondence</li>
<li>Insurance policies and premium payments</li>
<li>Claims documentation</li>
</ul>

<h2>Getting Started with Landlord Insurance</h2>

<h3>Assess Your Needs</h3>
<p>Consider your specific situation: property value, mortgage requirements, vacancy risks, tenant type, and financial capacity to handle losses.</p>

<h3>Get Professional Advice</h3>
<p>Consult with a mortgage broker or insurance adviser who specialises in landlord insurance. They can help identify coverage gaps specific to your situation.</p>

<h3>Compare Multiple Quotes</h3>
<p>Use our <a href="/compare">comparison tool</a> to view different insurers side-by-side. Each insurer has different strengths for landlord coverage.</p>

<h3>Start Coverage Immediately</h3>
<p>Don't delay – arrange landlord insurance before or immediately after acquiring a rental property. Gaps in coverage could prove costly.</p>

<h2>Conclusion</h2>
<p>Landlord buildings insurance is a critical component of responsible property investment in New Zealand. Whether you're a new investor with one property or an experienced landlord with a portfolio, appropriate buildings insurance protects your investment, ensures compliance with legal and lender requirements, and provides peace of mind. By understanding your coverage options and selecting appropriate extras like loss of rent cover, you can protect your rental income and investment. Get quotes today to find the best landlord insurance for your situation.</p>`,
  },
  {
    slug: 'body-corporate-insurance-explained',
    title: 'Body Corporate Insurance Explained: Protecting Your Apartment Investment',
    excerpt: 'Understanding body corporate buildings insurance in New Zealand, coverage requirements, and how it protects apartment owners and body corporates.',
    date: '2026-02-05',
    category: 'Industry Insights',
    author: 'James Thornton',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    readingTime: 8,
    content: `<h2>What Is Body Corporate Insurance?</h2>
<p>Body corporate insurance, also called "master" or "buildings" insurance, is buildings insurance arranged for an entire apartment building or unit complex. Unlike individual homeowners who arrange their own insurance, apartment owners share a collective buildings insurance policy managed by the body corporate (or body of owners).</p>
<p>Body corporate insurance is one of the most important protections for apartment communities in New Zealand. It covers the building structure and common areas, protecting the investment of all unit owners simultaneously.</p>

<h2>How Body Corporate Insurance Works</h2>

<h3>Who Arranges Body Corporate Insurance?</h3>
<p>The body corporate (the collective of all unit owners) arranges master buildings insurance covering the entire building structure. This is typically coordinated by the body corporate's committee or through a managing agent. The cost is shared among all unit owners as part of their body corporate levy.</p>

<h3>What's Covered</h3>
<p>Body corporate buildings insurance typically covers:</p>
<ul>
<li>Building structure (walls, roof, floors)</li>
<li>Common areas (hallways, lifts, stairs)</li>
<li>Exterior elements (balconies, fences, decks)</li>
<li>Shared facilities (pools, gyms, parking)</li>
<li>Building systems (plumbing, electrical, heating)</li>
<li>Permanent fixtures in common areas</li>
</ul>

<h3>What Individual Unit Owners Must Cover</h3>
<p>Unit owners are responsible for insuring their own:</p>
<ul>
<li>Personal contents (furniture, electronics)</li>
<li>Internal fixtures (kitchen cabinets, bathroom fittings)</li>
<li>Improvements or alterations they've made</li>
</ul>

<h2>Body Corporate Obligations and Legal Requirements</h2>

<h3>Legal Duty to Insure</h3>
<p>Under New Zealand property law, bodies corporate have a legal obligation to arrange buildings insurance on the structure. This is not optional – it's a mandatory requirement to protect unit owners' investments.</p>

<h3>Insurance Adequacy</h3>
<p>The body corporate must ensure the insurance sum insured is adequate to cover rebuild costs if the entire building is destroyed. Underinsurance puts all unit owners at financial risk.</p>

<h3>EQC Coverage for Body Corporates</h3>
<p>Just like residential homes, apartment buildings are covered by the <a href="https://www.eqc.govt.nz" target="_blank" rel="noopener noreferrer">Earthquake Commission (EQC/Toka Tu Ake)</a>. However, for apartments, EQC cover is typically capped at $300,000 per unit (not per building). Bodies corporate must understand how EQC interacts with their master insurance and arrange additional cover if needed.</p>

<h2>Types of Body Corporate Insurance Coverage</h2>

<h3>Full Replacement Value</h3>
<p>Full replacement cover (indemnity) means the insurer will pay rebuild costs as determined at claim time. This is generally recommended for body corporates because apartment buildings are complex and rebuild costs can be substantial and unpredictable.</p>

<h3>Agreed Value</h3>
<p>Some body corporates use agreed value where the rebuild cost is estimated and agreed with the insurer upfront. This requires accurate valuations but provides certainty about coverage limits.</p>

<h3>Optional Coverage Options</h3>
<p>Many body corporate policies include or offer optional coverage for:</p>
<ul>
<li><strong>Loss of rent cover:</strong> Important if the building includes rental units</li>
<li><strong>Temporary accommodation:</strong> For residents displaced during repairs</li>
<li><strong>Legal costs:</strong> Coverage for disputes or legal issues</li>
<li><strong>Natural disaster extension:</strong> For earthquake or other natural disaster damage above EQC limits</li>
<li><strong>Breakdown cover:</strong> For building system failures</li>
</ul>

<h2>Challenges with Body Corporate Insurance</h2>

<h3>Underinsurance Risk</h3>
<p>Many body corporates are underinsured because they don't regularly revalue their buildings. Building costs rise significantly over time, and aging buildings may have hidden repair needs that increase rebuild costs. Underinsurance means unit owners could face special levies to cover uninsured losses.</p>

<h3>Shared Risk and Responsibility</h3>
<p>All unit owners share the risk and responsibility. A single claim affects all owners through increased premiums or levies. Some owners may be careless about fire safety or damage prevention, affecting insurance costs for everyone.</p>

<h3>Insurance Premium Increases</h3>
<p>Body corporate insurance premiums have risen significantly in recent years. Factors include:</p>
<ul>
<li>Rising building and reconstruction costs</li>
<li>More frequent natural disasters and severe weather</li>
<li>Increased earthquake risk assessments</li>
<li>Claims history of the specific building</li>
<li>Age and condition of the building</li>
</ul>

<h2>Body Corporate Maintenance and Insurance</h2>

<h3>Connection Between Maintenance and Insurance</h3>
<p>Poor building maintenance increases insurance claims and premiums. Well-maintained buildings have fewer damage claims and better insurance terms. The body corporate's responsibility to maintain the common areas directly impacts insurance costs.</p>

<h3>Common Maintenance Issues Affecting Insurance</h3>
<ul>
<li>Roof leaks leading to water damage</li>
<li>Electrical system failures</li>
<li>Plumbing issues and burst pipes</li>
<li>Poor drainage causing foundation damage</li>
<li>Fire safety system failures</li>
</ul>

<h3>Regular Valuation Updates</h3>
<p>The body corporate should arrange professional building valuations every 3–5 years to ensure insurance sums insured remain adequate. A property valuation expert assesses the cost to rebuild the building from scratch, which is the true insurance requirement.</p>

<h2>Individual Unit Owner Responsibilities</h2>

<h3>Understanding Coverage Gaps</h3>
<p>While the body corporate insurance covers the building structure, individual unit owners must understand what's NOT covered by master insurance:</p>
<ul>
<li>Interior fixtures and improvements made by the owner</li>
<li>Personal contents and belongings</li>
<li>Owner-installed modifications (kitchen renovations, etc.)</li>
<li>Landlord protection (for investment unit owners)</li>
</ul>

<h3>Individual Contents Insurance</h3>
<p>All unit owners should have contents insurance to cover their personal belongings. This is separate from the body corporate's master insurance and provides essential protection.</p>

<h3>Landlord Coverage for Investment Units</h3>
<p>If you own an apartment as a rental investment, arrange separate landlord buildings insurance for your improvements and additional protection beyond what the body corporate provides. Some body corporate policies exclude landlord-specific cover.</p>

<h2>Getting the Best Body Corporate Insurance</h2>

<h3>Regular Quotes and Comparison</h3>
<p>The body corporate committee should review insurance quotes regularly. Different insurers offer different terms, and competitive shopping can save significant money.</p>

<h3>Working with Insurance Brokers</h3>
<p>Many body corporates engage specialist insurance brokers who understand apartment insurance complexities. A broker can negotiate better terms and ensure appropriate coverage.</p>

<h3>Risk Management Practices</h3>
<p>Demonstrating good building management and maintenance practices can improve insurance terms. Insurers reward well-managed buildings with better premiums.</p>

<h3>Regular Reviews</h3>
<p>Insurance needs change as buildings age and damage histories evolve. The body corporate should review insurance annually and conduct comprehensive reviews every few years.</p>

<h2>Special Considerations for Apartment Communities</h2>

<h3>Mixed-Use Buildings</h3>
<p>If the building includes commercial spaces, residential units, or mixed uses, insurance becomes more complex. Different coverage may apply to different areas, and careful coordination is essential.</p>

<h3>Heritage or Historic Buildings</h3>
<p>Historic apartment buildings may have higher insurance costs and require specialist coverage to account for restoration requirements that exceed standard rebuild costs.</p>

<h3>New vs. Aging Buildings</h3>
<p>Newer buildings may have lower insurance costs, while older buildings face higher premiums and potentially more comprehensive coverage requirements due to age-related risks.</p>

<h2>Understanding Your Body Corporate Documents</h2>

<h3>Insurance Information in Disclosure Documents</h3>
<p>When purchasing an apartment, review the body corporate disclosure documents for insurance information:</p>
<ul>
<li>Current insurance details</li>
<li>Coverage limits and sums insured</li>
<li>Recent claims history</li>
<li>Insurance premium trends</li>
<li>Body corporate levy history</li>
</ul>

<h3>Questions to Ask</h3>
<p>Before purchasing an apartment, ask:</p>
<ul>
<li>Is the building adequately insured?</li>
<li>When was the last professional valuation done?</li>
<li>What's the recent claims history?</li>
<li>Are premiums trending up significantly?</li>
<li>Is earthquake cover adequate?</li>
<li>Has there been recent water damage or other issues?</li>
</ul>

<h2>Common Issues and Disputes</h2>

<h3>Special Levies for Underinsurance</h3>
<p>If the body corporate is underinsured and a major claim occurs, unit owners may be asked to pay special levies to cover the shortfall. This can be expensive and creates conflict among owners.</p>

<h3>Disputes Over Coverage</h3>
<p>Disagreements sometimes arise about whether specific damage is covered. Having clear insurance documentation and professional claims management helps resolve disputes fairly.</p>

<h3>Premium Affordability</h3>
<p>Rising insurance premiums affect body corporate levies and unit owner costs. Some communities struggle with premium affordability while needing to maintain adequate coverage.</p>

<h2>Conclusion</h2>
<p>Body corporate buildings insurance is essential protection for apartment communities in New Zealand. It protects the collective investment of all unit owners while also protecting individual owner interests. Bodies corporate must ensure insurance is adequate, regularly reviewed, and responsive to building changes. Individual unit owners should understand what's covered by body corporate insurance and arrange supplementary insurance for contents and personal improvements. Whether you're a body corporate committee member or an apartment owner, understanding how body corporate insurance works is crucial for protecting your property investment and financial security.</p>`,
  },

  // ── NEW ARTICLES ──────────────────────────────────────────────────────────

  {
    slug: 'eqc-natural-hazards-commission-changes-2024',
    title: 'EQC Is Now the Natural Hazards Commission: Key Changes NZ Homeowners Must Know',
    excerpt: 'From 1 July 2024, New Zealand\'s Earthquake Commission became the Natural Hazards Commission Toka Tū Ake. Here\'s exactly what changed — and what stayed the same — for your buildings insurance.',
    date: '2026-04-28',
    category: 'NZ Market',
    author: 'James Thornton',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    readingTime: 7,
    content: `<h2>A New Name for a Familiar Scheme</h2>
<p>From 1 July 2024, New Zealand's Earthquake Commission (EQC) became the <strong>Natural Hazards Commission Toka Tū Ake (NHC)</strong>. This was no mere rebrand — it was the most significant reform to New Zealand's residential natural hazards insurance scheme since 1993, triggered by lessons from the Canterbury earthquake sequence and the 2020 Public Inquiry into EQC.</p>
<p>The Māori name Toka Tū Ake means "the foundation from which we stand strong, together" — a phrase that captures the pooled, community-funded nature of the scheme. If you own a home in New Zealand, understanding what changed matters directly to how your insurance claim would be handled.</p>

<h2>What Is the Natural Hazards Commission?</h2>
<p>Like its predecessor, the NHC is a Crown entity that provides the first layer of insurance cover for residential properties against natural hazards. It is funded by a levy embedded in every residential buildings insurance premium — currently NZ$480 per year. The NHC absorbs initial losses so that private insurers only need to cover damage above the cap, which helps keep private insurance available and affordable across New Zealand.</p>
<p>Cover now extends to earthquakes, volcanic eruptions, tsunami, geothermal activity, storms, floods, and landslides. The new name better communicates this full scope — many homeowners previously assumed cover was limited to earthquakes alone.</p>

<h2>The Building Cover Cap: Still $300,000</h2>
<p>One of the most important things to understand is that the <strong>building cover cap remains $300,000 plus GST per insured dwelling</strong>. This applies to damage occurring on or after 1 July 2024. For damage that first occurred before that date, the old EQC Act still governs.</p>
<p>This cap means that if your home requires more than $300,000 to rebuild after a natural hazard event, your private buildings insurer covers the shortfall — which is exactly why maintaining an adequate buildings insurance policy is non-negotiable.</p>

<h2>The Biggest Change: A Flat $500 Excess</h2>
<p>Under the old EQC Act, the excess for a building claim was 1% of the total settlement, with a minimum of $200 and a maximum of $3,450. For a $200,000 claim, that meant a $2,000 excess.</p>
<p>Under the NHI Act 2023, the excess for building claims is now a <strong>flat $500 per insured home</strong>. This is a significant simplification and, for most homeowners, a meaningful reduction in out-of-pocket costs when making a claim. The land claim excess is also $500, with a maximum of $5,000 for buildings with more than ten insured homes.</p>

<h2>New Complaints and Dispute Resolution Rights</h2>
<p>One of the clearest improvements from the Canterbury experience is a stronger framework for homeowners who disagree with a claim outcome. The new Act introduced:</p>
<ul>
<li><strong>A Code of Insured Persons' Rights</strong> — sets the standard of service you can expect during a claim</li>
<li><strong>NHCover Dispute Resolution service</strong> — a free, independent service provided by Fair Way for disputes about NHCover claim outcomes</li>
<li><strong>An independent review system</strong> — available when homeowners feel the Code has not been followed</li>
</ul>
<p>These pathways avoid the cost and delay of court proceedings, which proved to be a major source of distress for Canterbury claimants.</p>

<h2>Other Notable Changes Under the NHI Act</h2>
<h3>Heating Is Now a Covered Essential Service</h3>
<p>The NHI Act expanded the list of essential services covered to include heating. Under the old EQC Act, water supply, drainage, sewerage, gas, electricity, and telephone services were covered. Heating is now added to this list.</p>

<h3>Mixed-Use Buildings Get Better Protection</h3>
<p>Apartment owners in mixed-use buildings (e.g., residential units above commercial premises) will find it easier to qualify for full NHCover under the revised 50% threshold criteria. Buildings that don't meet the threshold now receive proportionate cover for common and joint property — previously they received nothing.</p>

<h3>Retaining Walls and Land Cover Clarifications</h3>
<p>Retaining walls, bridges, and culverts may now be covered even when located outside the property boundary, provided the homeowner has an insurable interest (e.g., through a licence to occupy). The land cover cap for retaining walls is $50,000 plus GST, and $25,000 plus GST for bridges and culverts — with the NHI Act using undepreciated value rather than indemnity value for these structures.</p>

<h2>What Hasn't Changed</h2>
<p>Despite the reforms, several fundamentals remain constant:</p>
<ul>
<li>NHCover is automatic for any homeowner with a valid private buildings insurance policy</li>
<li>Claims for natural hazard damage are lodged through your private insurer, who coordinates with the NHC</li>
<li>The land cover area remains 8 metres around the home, plus up to 60 metres of driveway</li>
<li>The $300,000 building cap is unchanged</li>
<li>The annual levy is currently NZ$480</li>
</ul>

<h2>What This Means for Your Buildings Insurance</h2>
<p>The NHC reforms don't change the core reason every NZ homeowner needs private buildings insurance: the NHC cap is a floor, not a ceiling. If your home costs more than $300,000 to rebuild — and the majority of family homes in Auckland, Wellington, and Christchurch now do — your private insurer covers the difference.</p>
<p>Review your sum insured annually to ensure it reflects current rebuild costs. Construction material costs in New Zealand rose sharply through 2022–2024, and many policies set years ago are now underinsured by tens of thousands of dollars. <a href="/contact">Talk to one of our advisers</a> to ensure your cover is adequate and properly coordinated with NHCover.</p>`,
  },

  {
    slug: 'home-underinsurance-nz-rebuild-cost-guide',
    title: 'Is Your NZ Home Underinsured? The Hidden Risk Affecting Thousands of Kiwis',
    excerpt: 'Underinsurance is one of the most common — and costly — mistakes NZ homeowners make. Here\'s how to calculate your true rebuild cost and avoid being left short when it matters most.',
    date: '2026-04-21',
    category: 'Guides',
    author: 'Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80',
    readingTime: 8,
    content: `<h2>The Underinsurance Problem in New Zealand</h2>
<p>Underinsurance is one of the most widespread and underappreciated risks facing New Zealand homeowners. The problem is simple: you insure your home for less than it would actually cost to rebuild it. When disaster strikes, your insurer pays out up to your policy limit — and you cover the rest yourself.</p>
<p>After major events like the Canterbury earthquakes and Cyclone Gabrielle, assessors discovered that a significant proportion of affected homes were insured for substantially less than their true rebuild value. Some homeowners faced rebuild shortfalls of $100,000 or more — money they had to find themselves at the worst possible time.</p>

<h2>Why Underinsurance Happens</h2>
<p>Most homeowners don't deliberately underinsure their properties. It happens gradually, through a combination of common mistakes:</p>
<ul>
<li><strong>Setting and forgetting:</strong> The sum insured is set when the policy is first taken out and never reviewed, even as rebuild costs rise with inflation</li>
<li><strong>Using the purchase price:</strong> The market value of a property includes land — which is not insured. Your buildings insurance only needs to cover the rebuild cost of the structure, but many people use their purchase price as a starting point, which may be too high in some cases and dangerously low in others</li>
<li><strong>Not accounting for construction cost inflation:</strong> NZ construction costs rose sharply through 2022–2024, driven by supply chain disruption, labour shortages, and material price increases. A sum insured set in 2020 may be 25–35% too low today</li>
<li><strong>Forgetting permanent improvements:</strong> Renovations, extensions, new kitchens, and landscaping all add to the rebuild cost but are often not reported to the insurer</li>
<li><strong>Ignoring site-specific costs:</strong> Demolition, debris removal, professional fees (architect, engineer, surveyor), and compliance with current building codes all add to a rebuild — sometimes by 15–20% above the raw construction cost</li>
</ul>

<h2>What Is the Rebuild Cost?</h2>
<p>The rebuild cost — also called the replacement cost — is the amount it would cost to demolish the existing structure and rebuild your home to its current standard from scratch, on your existing site, using today's material and labour costs. It is not the same as:</p>
<ul>
<li>The market value of your property (which includes land)</li>
<li>The rateable value (RV/CV) set by your local council</li>
<li>The price you paid for the property</li>
<li>What a neighbour's property sold for</li>
</ul>
<p>The rebuild cost depends on the size of the house (floor area in m²), construction type (timber frame, brick veneer, concrete block, etc.), quality of finishes (standard, mid-range, premium), location (regional construction costs vary significantly), and any special features (pool, workshop, sleepout, deck, retaining walls).</p>

<h2>How to Calculate Your Rebuild Cost</h2>
<h3>Option 1: Use the Cordell Sum Sure Calculator</h3>
<p>The <a href="https://sumsure.corelogic.co.nz" target="_blank" rel="noopener noreferrer">Cordell Sum Sure Calculator</a> — developed by CoreLogic and widely used by NZ insurers and brokers — provides a free, reasonably accurate rebuild cost estimate based on your property details. It takes around five minutes to complete. While not a substitute for a professional valuation, it is a reliable starting point and is widely accepted by insurers as a reasonable basis for setting sums insured.</p>

<h3>Option 2: Use a Quantity Surveyor or Registered Valuer</h3>
<p>For high-value, unusual, or heritage properties, a professional insurance valuation from a registered valuer or quantity surveyor is the most accurate approach. Expect to pay $400–$1,500 depending on the property. This valuation should be updated every three to five years, or sooner following significant renovation.</p>

<h3>Option 3: Review Your Insurer's Rebuild Cost Estimate</h3>
<p>Some insurers provide their own estimate of your rebuild cost at renewal. Review this figure carefully — if it seems low relative to your understanding of current construction costs, query it with your adviser.</p>

<h2>The Proportional Payout Problem</h2>
<p>Some buildings insurance policies contain an "averaging" or "co-insurance" clause. If you are insured for less than the full rebuild cost and you make a claim — even for a partial loss like a damaged roof — your insurer may only pay a proportional share of the claim.</p>
<p>For example: your home has a true rebuild value of $700,000 but you are insured for $500,000 — 71% of the actual value. You make a $100,000 claim for storm damage. With averaging applied, your insurer may pay only 71% of $100,000 — just $71,000 — leaving you $29,000 short, plus your excess.</p>
<p>Not all policies apply averaging clauses, and some apply them only after you are more than a certain percentage underinsured. Ask your adviser whether your policy includes this clause and how it works.</p>

<h2>Construction Costs in New Zealand: 2024–2026 Context</h2>
<p>According to CoreLogic and BRANZ data, New Zealand construction costs rose an average of 7–10% per year between 2021 and 2024. While cost inflation eased in 2024–2025 as supply chains normalised, overall construction costs remain 30–40% higher than pre-2020 levels. This means a home insured in 2019 based on 2019 cost estimates is likely significantly underinsured today, even if the policy has had annual CPI adjustments applied.</p>
<p>Labour shortages, particularly for tradespeople, continue to put upward pressure on rebuild timelines and costs. After a major event like an earthquake or severe weather, when many properties are damaged simultaneously, rebuild costs typically rise further due to demand pressure — a phenomenon insurers call "demand surge."</p>

<h2>How to Fix Underinsurance</h2>
<ol>
<li><strong>Run a Cordell Calculator estimate</strong> for your current property details</li>
<li><strong>Compare the result to your current sum insured</strong> — if there's a significant gap, contact your insurer or broker</li>
<li><strong>List all permanent improvements</strong> you've made since the policy was set</li>
<li><strong>Ask your adviser about inflation-linked sum insured options</strong> — some policies automatically adjust the sum insured annually based on construction cost indices</li>
<li><strong>Set a reminder to review annually</strong>, ideally at renewal time</li>
</ol>
<p>Getting the right sum insured is one of the most important things you can do as a homeowner. <a href="/contact">Speak with one of our advisers</a> — they can help you assess whether your current cover is adequate and identify the best policy for your property.</p>`,
  },

  {
    slug: 'nz-buildings-insurance-market-2026-soft-cycle',
    title: 'NZ Buildings Insurance in 2026: Premiums Are Softening — Here\'s How Homeowners Benefit',
    excerpt: 'New Zealand\'s general insurance market has entered a soft cycle. Gallagher and Marsh both confirm premiums are easing. Here\'s what this means for homeowners and property investors shopping for cover right now.',
    date: '2026-04-14',
    category: 'NZ Market',
    author: 'James Thornton',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    readingTime: 6,
    content: `<h2>The NZ Insurance Market Is in a Soft Phase</h2>
<p>If you are renewing your buildings insurance in 2025 or 2026, you may be in a stronger negotiating position than at any point in the past five years. New Zealand's general insurance market entered what brokers describe as a "soft phase" in the second half of 2024, and conditions have continued to ease into 2026.</p>
<p>According to Gallagher's March 2026 Insurance Market Update and Marsh's February 2026 New Zealand Market Update — two of the most widely followed industry reports in the NZ market — multiple factors are combining to create favourable conditions for buyers of property insurance.</p>

<h2>What Is a Soft Insurance Market?</h2>
<p>Insurance markets move in cycles. In a "hard" market (which NZ experienced through 2022–2024 following the Canterbury, Kaikōura, and Auckland Anniversary Weekend flood events), insurers raise premiums, tighten policy terms, and reduce capacity. In a "soft" market, the reverse occurs: more competition, lower premiums, broader cover, and more flexible terms.</p>
<p>The current soft phase is being driven by:</p>
<ul>
<li><strong>Global insured losses 5% below the 10-year average in 2025</strong> — fewer major catastrophe events globally means reinsurers are well capitalised and willing to offer capacity at lower cost</li>
<li><strong>Record global (re)insurance capital of approximately US$838 billion</strong> entering 2026 — more capital chasing business pushes prices down</li>
<li><strong>Strong profitability for NZ's two major insurer groups</strong> — IAG (which includes NZI, State, and AMI) reported approximately 50% profit growth through the year to June 2025; Suncorp (Vero and AA Insurance) reported over 40% growth; QBE reported a 27% increase in its June 2025 half-year result</li>
<li><strong>Global reinsurance costs easing over 12.5%</strong> in early 2026 — cheaper reinsurance reduces insurers' costs, and some of those savings are passed on in primary pricing</li>
</ul>

<h2>Who Are the Major Players in NZ Buildings Insurance?</h2>
<p>Understanding the structure of the NZ market helps you compare offers more effectively. The market is dominated by two large insurer groups that between them account for the majority of residential buildings insurance in New Zealand:</p>
<h3>IAG New Zealand</h3>
<p>IAG operates through multiple brands in New Zealand, including <strong>NZI</strong> (commercial), <strong>State Insurance</strong> (direct to consumer), and <strong>AMI</strong> (direct to consumer). IAG reported gross written premium of approximately NZ$3.8 billion in 2023/24, making it the largest general insurer in the country. IAG's intermediated business (primarily NZI) fell 10.4% in its most recent half-year result — a reflection of the soft market rather than a loss of market position.</p>
<h3>Suncorp New Zealand</h3>
<p>Suncorp operates through <strong>Vero Insurance</strong> (commercial and broker-placed) and <strong>AA Insurance</strong> (direct consumer brand, offered through the AA membership network). Suncorp's NZ gross written premium declined 5.6% in its most recent result, also reflecting market softening rather than underlying weakness.</p>
<h3>Other Significant Participants</h3>
<p>QBE, Tower Insurance, Youi, and a number of Lloyd's-backed specialist insurers (particularly for high-value, commercial, or unusual properties) compete across various segments of the market. This diversity means consumers and businesses who use a broker can often access better pricing and terms than those who deal with a single direct insurer.</p>

<h2>What Soft Market Conditions Mean for Homeowners</h2>
<p>For residential policyholders, the practical effects of the soft market include:</p>
<ul>
<li><strong>More competitive premiums at renewal</strong> — if you haven't compared in the past two years, you may be paying above-market rates</li>
<li><strong>Broader coverage terms</strong> — insurers competing for business are more willing to include optional extensions (gradual damage, replacement cost for older appliances, temporary accommodation upgrades) without significant premium loading</li>
<li><strong>Reduced exclusions</strong> — some insurers that previously applied flood, landslide, or specific location exclusions following the 2023 North Island weather events are beginning to ease those restrictions, particularly for properties in lower-risk postcodes</li>
<li><strong>Better response to risk improvements</strong> — if you have made structural improvements, installed a security system, re-roofed, or made other risk-reducing changes, now is an ideal time to report these and ask for a premium review</li>
</ul>

<h2>Caveats: What Could Reverse the Soft Cycle</h2>
<p>Gallagher's report warns that a "tipping point" may occur within six months if falling premiums and normalised claims costs intersect, squeezing insurer margins. When that happens, insurers typically respond by tightening underwriting and raising rates. The broker expects early signs to include more selective risk assessment and narrower pricing relief for commercial risks — but residential lines may follow.</p>
<p>Climate-related events remain the largest risk to the current soft market. The La Niña weather pattern, warmer sea surface temperatures, and increased tropical cyclone activity in the South Pacific could generate large weather-related losses that rapidly reverse current conditions. The July 2026 FENZ levy changes will also add to insurance-related costs across the board.</p>

<h2>How to Take Advantage of Current Conditions</h2>
<p>The best way to benefit from a soft market is to compare — and do so through a broker who can access multiple insurers simultaneously. Direct-to-consumer channels offer convenience, but brokers typically access the intermediated market (NZI, Vero) alongside direct brands, giving you more options.</p>
<p>When reviewing your policy, consider:</p>
<ul>
<li>Whether your sum insured is up to date (see our guide on underinsurance)</li>
<li>Whether your excess is appropriately set — a higher excess lowers premiums, but ensure it's affordable</li>
<li>Whether optional extensions (gradual damage, temporary accommodation, extended liability) represent value at current pricing</li>
<li>Whether any property improvements you've made qualify for a premium discount</li>
</ul>
<p><a href="/contact">Submit a quote request</a> and one of our licensed advisers will shop your property across the major NZ insurers to find the most competitive policy for your situation.</p>`,
  },

  {
    slug: 'buildings-insurance-first-home-buyers-nz',
    title: 'Buildings Insurance for First Home Buyers: Everything You Need to Know',
    excerpt: 'Buying your first home in New Zealand? Your mortgage lender will require buildings insurance before settlement. Here\'s exactly what you need, when you need it, and how to get it right from day one.',
    date: '2026-04-07',
    category: 'Guides',
    author: 'Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    readingTime: 7,
    content: `<h2>Your First Home: Don't Let Insurance Catch You Off-Guard</h2>
<p>Buying your first home is one of the most exciting — and administratively intense — experiences of your life. Among the many tasks to complete before settlement, arranging buildings insurance is non-negotiable. Your bank or lender will require evidence of cover before they will release mortgage funds, and in most cases they need to see this within days of confirming your finance. Getting it wrong, or leaving it too late, can delay your settlement.</p>

<h2>When Do You Need to Arrange Insurance?</h2>
<p>Buildings insurance should be in place from the date your purchase goes unconditional — not from settlement. This is a critical point that many first-home buyers miss.</p>
<p>Once your offer goes unconditional (meaning all conditions have been satisfied and the contract is binding), you have a legal and financial interest in the property. If the house burns down between going unconditional and settling, you could still be legally required to complete the purchase. Insurance protects you during this exposure window.</p>
<p>Most lenders require confirmation of cover at least two to five working days before settlement. Build this into your timeline — don't leave it to the week of settlement when you have a hundred other things to do.</p>

<h2>What Does Buildings Insurance Cover for First Home Buyers?</h2>
<p>A standard buildings insurance policy covers the structure of your home — walls, roof, floors, windows, permanent fixtures, built-in appliances — against damage from insured events including:</p>
<ul>
<li>Fire and explosion</li>
<li>Storm and flood damage</li>
<li>Burst pipes and water damage</li>
<li>Vandalism and malicious damage</li>
<li>Subsidence (where not covered by NHCover)</li>
<li>Accidental damage (optional on most policies)</li>
</ul>
<p>It does not cover your furniture, electronics, or personal belongings — that's what contents insurance is for. While most first-home buyers focus on buildings insurance (the lender requirement), a combined buildings and contents policy is usually worth considering from day one.</p>

<h2>Natural Hazards Cover (NHCover) — Automatic Protection</h2>
<p>When you take out a buildings insurance policy with a licensed NZ insurer, you automatically receive Natural Hazards Commission (NHC) cover — formerly called EQC cover. This covers your home against earthquake, tsunami, volcanic eruption, geothermal activity, storm, flood, and landslide damage up to $300,000 plus GST.</p>
<p>You don't need to arrange this separately or pay for it separately — it is embedded in your buildings insurance premium at a cost of NZ$480 per year (a levy passed through your insurer). For first home buyers, this means your buildings policy delivers two layers of protection simultaneously.</p>

<h2>Sum Insured vs. Full Replacement: Which Should You Choose?</h2>
<p>When setting up your policy, one of the most important decisions is whether to insure on a <strong>sum insured</strong> or <strong>full replacement</strong> basis.</p>
<h3>Sum Insured</h3>
<p>You specify the maximum amount your insurer will pay to rebuild your home. This requires you to accurately estimate the rebuild cost. If you get it wrong — specifically if you underestimate — you may not receive enough to fully rebuild after a major claim. Many first-home buyers find this intimidating, but the <a href="https://sumsure.corelogic.co.nz" target="_blank" rel="noopener noreferrer">Cordell Sum Sure Calculator</a> provides a reliable free estimate based on your property details.</p>
<h3>Full Replacement Cover</h3>
<p>Some policies offer to pay whatever it costs to rebuild your home to its pre-loss standard, without a fixed cap (subject to policy conditions). This removes the burden of accurately estimating rebuild costs, but such policies are becoming less common and generally carry higher premiums.</p>
<p>For most first-home buyers, a sum insured policy set using the Cordell calculator — reviewed annually — is the standard approach. Your adviser can help you set the right figure.</p>

<h2>What Your Lender Wants to See</h2>
<p>Your mortgage lender will typically require:</p>
<ul>
<li>A certificate of insurance (CoI) noting the property address and the lender's interest (often called "noting the mortgagee interest")</li>
<li>The policy to be in the name(s) of the borrower(s)</li>
<li>The sum insured to be at least equal to the outstanding loan amount (many lenders specify a minimum)</li>
<li>Confirmation that the policy is active from the unconditional date (or at latest, the settlement date)</li>
</ul>
<p>Ask your insurer or broker to prepare a CoI addressed to your lender. This is standard practice and usually prepared within 24 hours of your policy being issued.</p>

<h2>Factors That Affect Your Premium</h2>
<p>As a first-home buyer, several factors will influence what you pay:</p>
<ul>
<li><strong>Location:</strong> Properties in high-risk earthquake zones (Wellington, Canterbury), flood-prone areas, or locations far from fire services attract higher premiums</li>
<li><strong>Construction type:</strong> Timber frame homes typically attract lower premiums than brick or mixed construction in earthquake-prone areas</li>
<li><strong>Roof type:</strong> Iron and concrete tile roofs have different risk profiles; some insurers price these differently</li>
<li><strong>Age of the property:</strong> Homes built before 1980 may attract loading due to older electrical wiring, plumbing, and roofing materials</li>
<li><strong>Your excess:</strong> A higher voluntary excess reduces your premium — typically a $1,000–$2,500 excess is appropriate for most first-home buyers</li>
<li><strong>Security:</strong> Deadbolts, monitored alarms, and smoke detectors may attract small discounts depending on the insurer</li>
</ul>

<h2>Common Mistakes First Home Buyers Make with Buildings Insurance</h2>
<ul>
<li><strong>Leaving it too late:</strong> Don't wait until the week of settlement — arrange cover as soon as you go unconditional</li>
<li><strong>Using the purchase price as the sum insured:</strong> Your buildings insurance should reflect the rebuild cost of the structure, not the market value of the property (which includes land)</li>
<li><strong>Not noting the mortgagee:</strong> Your lender needs to be noted on the policy — this is their protection, not just yours</li>
<li><strong>Only going to one insurer:</strong> Premiums for the same property can vary significantly between insurers. Use a broker to compare</li>
<li><strong>Forgetting to update cover after renovations:</strong> If you renovate in your first few years, contact your insurer — your rebuild cost will have increased</li>
</ul>

<h2>Getting It Right from Day One</h2>
<p>The right buildings insurance policy is one that adequately covers your rebuild cost, fits your budget, and is with an insurer your adviser trusts to pay claims fairly and promptly. <a href="/contact">Contact our team</a> as soon as your offer goes unconditional — we'll arrange quotes from multiple licensed NZ insurers and have your certificate of insurance ready for your lender within 24 hours.</p>`,
  },

  {
    slug: 'severe-weather-home-damage-claims-guide-nz',
    title: 'What to Do When Severe Weather Damages Your NZ Home: A Step-by-Step Guide',
    excerpt: 'Severe weather events are becoming more frequent in New Zealand. If your home is damaged by storm, flooding, or a fallen tree, knowing exactly what to do — and in what order — can significantly improve your claims outcome.',
    date: '2026-03-31',
    category: 'Claims',
    author: 'James Thornton',
    image: 'https://images.unsplash.com/photo-1504608524841-42785f576404?w=800&q=80',
    readingTime: 6,
    content: `<h2>Weather Events Are Increasing in New Zealand</h2>
<p>Severe weather is not an occasional occurrence in New Zealand — it is a regular feature of our climate. In 2025, NZ insurers issued 36 separate weather-related event codes, generating thousands of claims from affected homeowners. The La Niña weather pattern, combined with warmer sea surface temperatures, is increasing the likelihood of tropical systems and periods of intense rainfall reaching New Zealand.</p>
<p>Cyclone Gabrielle in February 2023 was the most costly weather event in NZ history, generating billions of dollars in insurance claims across Hawke's Bay, Gisborne, Northland, and Auckland. But significant storm events occur every year — and knowing what to do when one damages your home can make a material difference to how quickly and how fully your claim is settled.</p>

<h2>Step 1: Prioritise Safety</h2>
<p>Before anything else, make sure your household is safe. If your home has been seriously damaged:</p>
<ul>
<li>Evacuate if there is any risk of structural collapse, gas leak, or flooding</li>
<li>Turn off electricity at the mains if you suspect water has entered electrical fittings</li>
<li>Do not re-enter a significantly damaged building until it has been assessed by a builder or engineer</li>
<li>Contact Civil Defence if a local emergency is declared — follow official guidance on evacuation zones</li>
</ul>

<h2>Step 2: Prevent Further Damage (Emergency Repairs)</h2>
<p>Your buildings insurance policy almost certainly includes a provision allowing — and in some cases requiring — you to take immediate steps to prevent further damage after an insured event. This might mean:</p>
<ul>
<li>Placing tarpaulins over a damaged roof to prevent water ingress</li>
<li>Boarding up broken windows or doors</li>
<li>Arranging emergency tree removal if a fallen tree is causing ongoing structural damage</li>
<li>Pumping out floodwater from a basement or ground floor</li>
</ul>
<p><strong>Keep all receipts for emergency repair costs.</strong> These are almost always claimable as part of your insurance claim. Most policies cover reasonable emergency repair costs incurred to prevent further loss, even before a formal claim assessment.</p>

<h2>Step 3: Document Everything Before Cleaning Up</h2>
<p>This is one of the most commonly skipped steps — and one of the most important. Before you clean up, repair, or dispose of anything:</p>
<ul>
<li><strong>Photograph and video the damage thoroughly</strong> — walk through every room, capture every affected surface, and document the exterior from multiple angles</li>
<li><strong>Photograph the cause of damage if visible</strong> — a fallen tree, blocked gutter, damaged roof tile</li>
<li><strong>Note the date and time of the weather event</strong> — your insurer will cross-reference with weather service records</li>
<li><strong>Record serial numbers and model numbers</strong> of any built-in appliances or fixtures that are damaged</li>
</ul>
<p>Your insurer's loss assessor will use your documentation alongside their own assessment. Strong photographic evidence accelerates the claims process and reduces the likelihood of disputes about the extent of pre-existing damage versus event-caused damage.</p>

<h2>Step 4: Contact Your Insurer Promptly</h2>
<p>Notify your insurer as soon as it is practicable to do so — most policies require you to report damage "as soon as reasonably possible." In practice, this means contacting your insurer within a few days of the event, not weeks later.</p>
<p>When you call or lodge your claim online:</p>
<ul>
<li>Have your policy number ready</li>
<li>Describe the damage clearly and concisely — avoid speculation about the cause</li>
<li>Ask for a claim reference number and the name of the person you spoke to</li>
<li>Ask what the next steps are and what timeframe to expect</li>
</ul>
<p>After a significant weather event affecting multiple properties in your area, insurers receive a high volume of claims simultaneously. Claims response times may be longer than usual — this is normal, but following up after 5–7 working days without contact is reasonable.</p>

<h2>Step 5: Understand the Assessor's Visit</h2>
<p>For significant claims, your insurer will arrange for a loss assessor (sometimes called a loss adjuster) to visit your property. This person works for or on behalf of your insurer to assess the damage and determine what is covered under your policy.</p>
<p>You are entitled to:</p>
<ul>
<li>Be present during the assessment</li>
<li>Ask questions and take notes</li>
<li>Engage your own independent assessor if you disagree with the insurer's assessment</li>
<li>Request a copy of the assessor's report</li>
</ul>
<p>Be straightforward and factual when describing the damage and when it occurred. Do not exaggerate or speculate. Assessors are experienced at identifying pre-existing damage, and overclaiming can result in a claim being partially or fully declined.</p>

<h2>Step 6: Know Your Rights — NHCover and Private Insurance</h2>
<p>If the weather event includes flooding, storm, or landslide damage, your claim may involve both your private buildings insurer and the Natural Hazards Commission (NHC). Damage from these natural hazards is covered by NHCover up to $300,000 — your private insurer handles the excess above that cap.</p>
<p>Under the new NHI Act 2023, you lodge all claims through your private insurer, who coordinates with the NHC on your behalf. You do not need to contact the NHC directly. If you are unhappy with the outcome of an NHC-related portion of your claim, you now have access to the free NHCover Dispute Resolution service provided by Fair Way.</p>

<h2>Step 7: If Your Claim Is Declined or Disputed</h2>
<p>If your insurer declines your claim — or offers a settlement you believe is too low — you have options:</p>
<ul>
<li><strong>Ask for the decision in writing</strong> and the specific policy clause they are relying on</li>
<li><strong>Engage an independent loss assessor</strong> to provide a second opinion on the damage and quantum</li>
<li><strong>Make a formal complaint</strong> to your insurer's internal complaints process</li>
<li><strong>Escalate to the Insurance and Financial Services Ombudsman (IFSO)</strong> at <a href="https://www.ifso.nz" target="_blank" rel="noopener noreferrer">www.ifso.nz</a> — this is a free, independent dispute resolution service</li>
</ul>
<p>The IFSO scheme covers most NZ insurers and is the standard avenue for resolving insurance disputes without going to court. Most disputes are resolved through this process.</p>

<h2>Being Prepared Before the Next Event</h2>
<p>The best time to review your buildings insurance is not after a storm — it's before one. Check that your sum insured reflects current rebuild costs, understand what your policy does and doesn't cover, and make sure your insurer has your current contact details. If you're not sure whether your current cover is adequate, <a href="/contact">speak with one of our advisers</a> before the next weather event season.</p>`,
  },

  {
    slug: 'buildings-insurance-excess-guide-nz',
    title: 'Choosing the Right Excess for Your NZ Buildings Insurance Policy',
    excerpt: 'Your insurance excess is one of the most significant levers you control when buying buildings insurance in New Zealand. Here\'s how to think about it — and how to set the right level for your situation.',
    date: '2026-03-24',
    category: 'Guides',
    author: 'Sarah Mitchell',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    readingTime: 5,
    content: `<h2>What Is an Insurance Excess?</h2>
<p>An insurance excess — sometimes called a deductible — is the amount you agree to pay yourself when you make a claim, before your insurer pays anything. If you have a $500 excess and you make a $12,000 claim for storm damage, your insurer pays $11,500 and you pay $500.</p>
<p>In New Zealand, buildings insurance policies typically include multiple types of excess that apply in different situations. Understanding each type — and choosing your voluntary excess level thoughtfully — can save you significant money on premiums without meaningfully increasing your financial risk.</p>

<h2>Types of Excess in NZ Buildings Insurance</h2>
<h3>Standard (Base) Excess</h3>
<p>This applies to most standard claims — fire, theft, storm damage, burst pipes, and similar events. The base excess is set by your insurer (often in the range of $250–$500) but you can typically increase it voluntarily to reduce your premium. You cannot usually reduce it below the insurer's minimum.</p>

<h3>Voluntary Excess</h3>
<p>An additional excess you choose to add on top of the standard excess in exchange for a premium reduction. For example, selecting a $1,000 voluntary excess in addition to a $500 standard excess means you pay the first $1,500 of any claim. The premium saving varies by insurer, property, and risk profile — typically 5–20% of your annual premium for a moderate increase in voluntary excess.</p>

<h3>NHCover (Natural Hazards) Excess</h3>
<p>Since 1 July 2024, under the Natural Hazards Insurance Act 2023, the Natural Hazards Commission applies a flat <strong>$500 excess</strong> per insured home for both building and land claims. This replaced the previous variable percentage-based system. This excess applies specifically to the NHCover portion of a natural hazard claim — your private insurer may apply their own excess separately to the portion of the claim they cover.</p>

<h3>Earthquake Excess</h3>
<p>Some private insurers apply a separate, higher excess specifically for earthquake-related claims — particularly for the portion of the claim above the NHC cap. This is common for properties in high-seismic-risk zones (Wellington, Canterbury, parts of the Bay of Plenty). Always check whether your policy applies a special earthquake excess and, if so, how it interacts with the NHC flat excess.</p>

<h3>Flood Excess</h3>
<p>Following the 2023 North Island weather events, some insurers introduced specific flood excesses for properties in identified flood-prone areas. These may be fixed amounts (e.g., $5,000–$20,000) or percentage-based. If your property is in a flood zone — check your council's GIS hazard mapping — ask specifically whether a flood excess applies and what amount.</p>

<h2>How Excess Affects Your Premium</h2>
<p>The relationship between excess and premium is straightforward: a higher excess means a lower premium, because you are absorbing more risk yourself. The premium saving from increasing your excess is typically largest at lower excess levels and diminishes as the excess gets very high.</p>
<p>As a rough guide for a typical NZ residential property:</p>
<ul>
<li>Moving from $500 to $1,000 voluntary excess: 5–10% premium reduction</li>
<li>Moving from $500 to $2,500 voluntary excess: 10–20% premium reduction</li>
<li>Moving from $500 to $5,000 voluntary excess: 15–25% premium reduction</li>
</ul>
<p>These figures vary considerably between insurers and property types. Your adviser can provide specific comparisons for your policy.</p>

<h2>How to Choose the Right Excess Level</h2>
<p>The right excess level depends on two things: your financial resilience (can you comfortably pay this amount if a claim occurs?) and your claims likelihood (how often do you expect to claim?).</p>
<h3>The "Self-Insurance Threshold" Approach</h3>
<p>Think of your excess as defining the level of damage you will self-insure — i.e., cover yourself without making a claim. Many homeowners find it makes sense to set their excess at a level where, for minor damage, they would simply repair it themselves rather than claiming. Claiming for small amounts raises your premium at renewal (claims history is a pricing factor) and consumes time and administration.</p>
<p>For most homeowners, this suggests a voluntary excess of $1,000–$2,500 is appropriate. For higher-net-worth homeowners with liquid savings, a $5,000 or even $10,000 voluntary excess can deliver meaningful premium savings in exchange for what is, for them, a manageable self-funded cost.</p>

<h3>Consider Your Emergency Fund</h3>
<p>A simple rule: don't set your voluntary excess higher than the cash you could access within 30 days. If you have $2,000 in easily accessible savings, a $5,000 voluntary excess leaves you exposed if a claim occurs at a financially inconvenient time.</p>

<h3>First Home Buyers and Lower Excess</h3>
<p>If you have just purchased your first home and stretched your savings to do so, a lower voluntary excess (or no voluntary excess above the insurer's standard) may be appropriate in the early years, even if it costs slightly more in premium. As your savings recover, you can increase the excess at renewal to reduce costs.</p>

<h2>When You Make a Claim: Excess Stacking</h2>
<p>Be aware that in some situations, multiple excesses can apply to a single claim. For example, after an earthquake that also causes water damage, you might face:</p>
<ul>
<li>NHC excess: $500</li>
<li>Private insurer standard excess: $500</li>
<li>Private insurer earthquake excess: $2,000 (if applicable for your area)</li>
</ul>
<p>Always ask your adviser to walk you through how excesses stack under your specific policy before you commit. This is particularly important in Wellington and other high-seismic-risk areas where earthquake-specific excesses are more common.</p>

<h2>Review Your Excess Annually</h2>
<p>Your excess should not be set and forgotten. Review it at each renewal in the context of your current savings position, any changes to your property risk profile, and current market pricing. In a soft market (as NZ is experiencing in 2025–2026), insurer competition means better excess/premium combinations are available than in recent years.</p>
<p><a href="/contact">Speak with one of our licensed advisers</a> to find the right excess level for your situation. They can run comparisons across multiple NZ insurers to show you exactly how much premium you save at different excess levels for your specific property.</p>`,
  },
];
